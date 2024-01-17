import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useSignInUserMutation } from '../../../generated/graphql';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/authProvider';
import { IonIcon } from '@ionic/react';

// import { mail-outline} from 'ionicons/icons';
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email &&!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if(!email || !password || !team){
      
      alert("Enter all the details")
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
    <div className='screen-1'>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div>
          <h2 className="animate__animated animate__bounce">Login</h2>
          <div className="emai">
          <label htmlFor="emal">
            Email</label>
            <div className="sec-2">
            {/* <IonIcon name={mail-outline}/> */}
            

            <input
            placeholder="email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
            />
          </div>
          </div>
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
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
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

