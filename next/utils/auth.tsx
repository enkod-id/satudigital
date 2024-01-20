import React, { useState, useEffect, ComponentType, ReactElement } from 'react';
import { useRouter } from 'next/router';

interface WithAuthProps {
  user?: {
    id: string;
    name: string;
    email: string;
  };
  onLogout?: () => void;
}

interface AuthDetails {
  isAuthenticated: boolean;
  role: string | null;
}

const getAuthDetails = (): AuthDetails => {
  if (typeof window === "undefined") {
    // Redirecting or setting state here won't work because this code is run on the server,
    // where window is not available. Instead, we return early.
    return { isAuthenticated: false, role: null };
  }

  const token = localStorage.getItem('authToken');
  if (!token) {
    return { isAuthenticated: false, role: null };
  }
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = atob(payloadBase64);
    const decoded = JSON.parse(decodedJson);

    const exp = decoded.exp;
    const isExpired = Date.now() >= exp * 1000;
    const role = decoded.role; // Asumsi: Role disimpan dalam token

    if (isExpired) {
      localStorage.removeItem('authToken'); // Clear expired token
      return { isAuthenticated: false, role: null };
    }

    return { isAuthenticated: true, role }; // Jika token valid, kembalikan role
  } catch (error) {
    console.error("Error parsing token:", error);
    return { isAuthenticated: false, role: null };
  }
};

function withAuth<P extends WithAuthProps>(WrappedComponent: ComponentType<P>): ComponentType<P> {
  const WithAuthComponent: ComponentType<P> = (props) => {
    const router = useRouter();
    const [authDetails, setAuthDetails] = useState<AuthDetails>({ isAuthenticated: false, role: null });

    useEffect(() => {
      const auth = getAuthDetails();
      setAuthDetails(auth);

      if (!auth.isAuthenticated) {
        router.push('/login');
      } else {
        switch (auth.role) {
          case 'user':
            if (router.pathname.includes('/dashboard/admin') || router.pathname.includes('/dashboard/superadmin')) {
              router.push('/dashboard/user'); // Adjust the route to your user dashboard page
            }
            break;
          case 'admin':
            if (router.pathname.includes('/dashboard/superadmin')) {
              router.push('/dashboard/admin'); // Adjust the route to your admin dashboard page
            }
            break;
          // No need to handle the 'superadmin' case if they can access all pages
          default:
            router.push('/logout'); // Redirect to logout if the role is unrecognized
            break;
        }
      }
    }, [router]);

    // Show a loading component until authentication is confirmed
    if (authDetails.isAuthenticated === null) {
      return <div>Loading...</div>; // Replace this with your actual loading component
    }

    // If authenticated, render the wrapped component
    if (authDetails.isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    // If not authenticated, render nothing as we're redirecting to '/login'
    return null;
  };

  WithAuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
}

export default withAuth;