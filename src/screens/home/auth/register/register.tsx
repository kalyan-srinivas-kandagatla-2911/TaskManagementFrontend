// src/App.js
import React, { ChangeEvent, useState } from 'react';

const RegPage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [team, setTeam] = useState<string>()
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const handleLogin = () => {
    if(!email || !password || !team || !username){
      setSignedIn(false)
      return;
    } else{

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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}}
            />
          </label>
          <br />
          <label>
            Team:
            <input
              type="text"
              value={team}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setTeam(e.target.value)}}
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
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
    <div className="Register">
      <RegPage />
    </div>
  );
}

export default Register;
