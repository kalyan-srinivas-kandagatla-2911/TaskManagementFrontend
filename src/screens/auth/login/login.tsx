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
            {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}
            <svg className="logo" xmlns="htt://www.w3.org/2000/svg" xmlnsXlink="htp://www.w3.org/1999/xlink" version="1.1" width="0" height="0" viewBox="0 0 640 480" xmlSpace="preserve">
        <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
          <circle style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(61,71,133)', fillRule: 'nonzero', opacity: 1 }} cx="0" cy="0" r="40"></circle>
        </g>
        <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
          <circle style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} cx="0" cy="0" r="40"></circle>
        </g>
        <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
          <circle style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} cx="0" cy="0" r="40"></circle>
        </g>
        <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
          <circle style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} cx="0" cy="0" r="40"></circle>
        </g>
        <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
          <polygon style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} points="-50,-50 -50,50 50,50 50,-50"></polygon>
        </g>
        <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
          <polygon style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} vectorEffect="non-scaling-stroke" points="-50,-50 -50,50 50,50 50,-50"></polygon>
        </g>
      </svg>
            {/* animantions */}
          <h2 className="animate__animated animate__bounce">Login</h2>
          <div className="emai">
          <label htmlFor="emal">
            Email</label>
            <div className="sec-2">
            {/* <IonIcon name={mail-outline}/> */}
            

            <input
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

