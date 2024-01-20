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
    return { isAuthenticated: false, role: null };
  }

  const token = localStorage.getItem('authToken');
  if (!token) {
    return { isAuthenticated: false, role: null };
  }try {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = atob(payloadBase64);
    const decoded = JSON.parse(decodedJson);

    const exp = decoded.exp;
    const isExpired = Date.now() >= exp * 1000;
    const role = decoded.role; // Asumsi: Role disimpan dalam token

    if (isExpired) {
      // Jika token kadaluarsa, user tidak terotentikasi dan role dianggap null
      return { isAuthenticated: false, role: null };
    }

    return { isAuthenticated: true, role }; // Jika token valid, kembalikan role
  } catch (error) {
    console.error("Error parsing token:", error);
    return { isAuthenticated: false, role: null };
  }
};

// Definisikan tipe untuk komponen yang dibungkus
function withAuth<P extends WithAuthProps>(WrappedComponent: ComponentType<P>): ComponentType<P> {
  
  const WithAuthComponent: ComponentType<P> = (props) => {
    const router = useRouter();
    const [authDetails, setAuthDetails] = useState<AuthDetails>({ isAuthenticated: false, role: null });

    useEffect(() => {
      const auth = getAuthDetails();
      setAuthDetails(auth);

      // Redirect berdasarkan role
      if (!auth.isAuthenticated) {
        router.push('/login'); // Asumsi '/login' adalah rute untuk halaman login Anda
      } else {
        switch (auth.role) {
          case 'user':
            if (router.pathname.includes('/dashboard/admin') || router.pathname.includes('/dashboard/superadmin')) {
              router.push('/dashboard_user'); // Sesuaikan dengan rute halaman dashboard pengguna Anda
            }
            break;
          case 'admin':
            if (router.pathname.includes('/dashboard/superadmin')) {
              router.push('/dashboard_admin'); // Sesuaikan dengan rute halaman dashboard admin Anda
            }
            break;
          case 'superadmin':
            // Superadmin bisa mengakses semua halaman, tidak ada aksi
            break;
          default:
            // Role tidak dikenali, lakukan logout dan redirect
            router.push('/logout'); // Pastikan Anda memiliki route logout
            break;
        }
      }      
    }, [router]); // Hanya perlu 'router' di dependencies array

    if (authDetails.isAuthenticated === false) {
      return null; // atau <LoadingComponent />;
    }

    if (authDetails.isAuthenticated && authDetails.role) {
      return <WrappedComponent {...props} />;
    }

    // Jika tidak terotentikasi, tidak perlu tampilkan apa-apa
    // Karena redirect akan menangani situasi ini
    return null;

  WithAuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
  }
};

export default withAuth;