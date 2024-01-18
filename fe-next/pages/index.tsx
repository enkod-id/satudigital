import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    // Lakukan pengalihan rute ke halaman login jika dibuka di localhost:3000
    router.replace('/auth/login');
  }, [router]);

  return (
    // Tampilan halaman login Anda disini
    <div>
      <h1>Login Page</h1>
      {/* Tambahkan formulir login atau komponen lain sesuai kebutuhan */}
    </div>
  );
};

export default Login;
