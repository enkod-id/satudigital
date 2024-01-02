// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgetPasswordForm from './components/ForgetPasswordForm';
import TodoPage from './components/TodoPage';
import UserTable from './components/UserTable';
import AddTodo from './components/AddTodo';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard
import UserDashboard from './components/UserDashboard'; // Import UserDashboard
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forget-password" element={<ForgetPasswordForm />} />
            <Route path="/todo" element={<ProtectedRoute><TodoPage /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><UserTable /></ProtectedRoute>} />
            <Route path="/todo/edit/1" element={<ProtectedRoute><AddTodo /></ProtectedRoute>} />
            <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
