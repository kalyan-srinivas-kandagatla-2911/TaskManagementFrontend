import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useSignInUserMutation } from '../../../../generated/graphql';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../utils/authProvider';

const LoginPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [team, setTeam] = useState<string>()
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const [signInUserMutation, { data, loading, error }] = useSignInUserMutation();
  const { refetch } = useContext(AuthContext);
  useEffect(() => {
    if(data){
      sessionStorage.setItem("user",JSON.stringify(data.signInUser))
      refetch()
      navigate("/")
    }
  },[data])
  const handleLogin = async () => {
    if(!email || !password || !team){
      setLoggedIn(false)
    }else {
      try {
        await signInUserMutation({
          variables:{
            data:{
              email,
              password:password,
              team
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) :
      loggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
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
            Team
            <input
              type="text"
              value={team}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setTeam(e.target.value)}}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
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

