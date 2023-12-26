// src/App.js
import React, { useState } from 'react';

const RegPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleLogin = () => {
    // In a real-world application, you would perform authentication here.
    // For simplicity, we'll just check if the username and password are not empty.
    if (username && password) {
      setSignedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      {signedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Team:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
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
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            Retype Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br/>
          <button onClick={handleLogin}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

function Register() {
  return (
    <div className="App">
      <RegPage />
    </div>
  );
}

export default Register;
