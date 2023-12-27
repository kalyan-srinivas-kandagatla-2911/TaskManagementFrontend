// src/App.js
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSignUpUserMutation } from '../../../../generated/graphql';

const RegPage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [team, setTeam] = useState<string>()
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [signUpUser, { data, loading, error }] = useSignUpUserMutation();

  useEffect(() => {
    if(data){
      sessionStorage.setItem('user', JSON.stringify(signUpUser))
    }
  },[])
  const  handleLogin = async () => {
    if(!email || !password || !team || !username){
      setSignedIn(false)
      return
    }

    try {
      await signUpUser({
        variables:{
          data:{
            username,
            email,
            password:password,
            team
          }
        }
      })
      
    } catch (error) {
      console.log(error)
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

