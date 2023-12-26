// import React from 'react'

// src/App.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real-world application, you would perform authentication here.
    // For simplicity, we'll just check if the username and password are not empty.
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <label>
            Email
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Team
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

function Login() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default Login;

