import React from 'react';
import './home.scss'
import Login from '../../auth/login/login';
import Nav from '../../../../ui-elements/navbar/navbar';
import { useLogOutUserMutation } from '../../../../generated/graphql';
import client from '../../../../apolloClient';
import TaskManager from '../taskManager/taskManager';
type HomeProps =
 {
    
};

const Home:React.FC<HomeProps> = () => {
    const [logOutUserMutation, { data, loading, error }] = useLogOutUserMutation();

    const logOut = async () => {
        sessionStorage.clear()
    }
    return (
        <div className="home">
            <div className="nav">
                <Nav />
            </div>
            <div className="task-manager">
                <TaskManager />
            </div>
            <div className="container">
                <button onClick={async () =>{
                    await logOutUserMutation();
                    window.location.reload()
                }}>Logout</button>
            </div>
        </div>
    )
}
export default Home;