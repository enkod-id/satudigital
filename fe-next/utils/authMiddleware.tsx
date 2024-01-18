import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from './auth';

export function withAuthentication(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        // Redirect ke halaman login jika tidak terautentikasi
        router.push('/');
      }
    }, []); // Gunakan dependensi kosong agar hanya dijalankan sekali saat komponen dimount

    if (!isAuthenticated()) {
      return null; // Tidak merender halaman saat ini jika tidak terautentikasi
    }

    // Jika terautentikasi, maka render komponen yang diminta
    return <Component {...props} />;
  };
}
