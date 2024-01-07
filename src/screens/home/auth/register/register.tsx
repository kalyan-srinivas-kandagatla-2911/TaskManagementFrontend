// src/App.js
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useSignUpUserMutation } from '../../../../generated/graphql';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../utils/authProvider';

function Register() {
    const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [team, setTeam] = useState<string>()
  const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation();
  const naviagte = useNavigate()
  const { refetch } = useContext(AuthContext);

  useEffect(() => {
    if(data){
      sessionStorage.setItem('user', JSON.stringify(signUpUserMutation))
      refetch()
      naviagte("/")
    }
  },[data])
  const  handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email &&!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if(!email || !password || !team || !username){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (email &&!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      alert("enter all the details");
      return
    }

    try {
      await signUpUserMutation({
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
    <div className="Register">
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
    </div>
  );
}

export default Register;






