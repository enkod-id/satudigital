// utils/auth.js
export function isAuthenticated() {
    if (typeof window !== 'undefined') {
      const authToken = localStorage.getItem('authToken');
      return authToken !== null;
    }
    return false;
  }
  
