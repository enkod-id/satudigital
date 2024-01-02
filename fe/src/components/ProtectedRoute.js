// ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;