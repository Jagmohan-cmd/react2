import React, { useState } from 'react';
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user object in local storage
        localStorage.setItem('user', JSON.stringify(data));
        onLogin();
      } else {
        // Handle login error
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='box'>
      <p>Welcome back!</p>
      <h2>Sign in to your account</h2>

      <h5>Your email</h5>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <h5>Password</h5>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Continue</button>
      <a>Forget your password ?</a>
    </div>
  );
};

export default Login;
