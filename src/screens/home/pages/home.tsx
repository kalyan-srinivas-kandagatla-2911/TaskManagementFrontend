import React from 'react';
import './home.scss'
import Login from '../auth/login/login';
import Nav from '../../../ui-elements/navbar/navbar';
type HomeProps =
 {
    
};

const Home:React.FC<HomeProps> = () => {
    const logOut = () => {
        sessionStorage.clear()
    }
    return (
        <div className="home">
            <div className="nav">
                <Nav />
            </div>
            <div className="container">
                <button onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}
export default Home;