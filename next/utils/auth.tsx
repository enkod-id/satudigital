// utils/auth.js atau utils/auth.ts

export const checkAuth = async (context) => {
    const token = context.req.cookies.token || context.req.headers.authorization;
  
    try {
      // Tulis logika untuk memeriksa validitas token di sini
      // Misalnya, decode dan verifikasi token
      const user = await verifyToken(token);
      if (!user) {
        // Jika token tidak valid, lempar error atau return object yang menunjukkan kegagalan
        return { authorized: false };
      }
  
      // Jika token valid, return object yang menunjukkan keberhasilan
      return { authorized: true, user };
    } catch (error) {
      // Jika terjadi error saat memeriksa token, handle error tersebut
      return { authorized: false };
    }
  };
  
  // Fungsi untuk memverifikasi token (sesuaikan implementasinya)
  async function verifyToken(token) {
    // Implementasi verifikasi token
  }
  