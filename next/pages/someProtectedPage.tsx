// pages/someProtectedPage.js

import { checkAuth } from '../utils/auth';

export async function getServerSideProps(context) {
  const { authorized, user } = await checkAuth(context);

  if (!authorized) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Return data yang dibutuhkan oleh halaman jika pengguna terautentikasi
  return {
    props: { user }, // atau data lain yang dibutuhkan
  };
}

// Komponen halaman
const SomeProtectedPage = ({ user }) => {
  // Render halaman
};
