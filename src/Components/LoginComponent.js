// LoginComponent.js
import React, { useState } from 'react';
import AuthService from './AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const nav = useNavigate()
  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      console.log('Login successful:', response);
      nav('/home')
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
