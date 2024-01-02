import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Save the token to localStorage
      localStorage.setItem('token', data.tokens.access.token);

      // Redirect based on user role if available
      if (data.user && data.user.role) {
        if (data.user.role === 'admin') {
          navigate('/admin-dashboard', { state: { token: data.token } });
        } else if (data.user.role === 'user') {
          navigate('/user-dashboard', { state: { token: data.token } });
        } else {
          // Handle other roles as needed
          navigate('/dashboard', { state: { token: data.token } });
        }
      } else {
        // Default redirect or handle no role case
        navigate('/login'); // Redirect to login form
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', marginTop: '50px', textAlign: 'center' }}>
      <h1>TODO APP</h1>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <Link to="/register">Register</Link> | <Link to="/forget-password">Lupa Password</Link>
      </p>
    </div>
  );
};

export default LoginForm;
