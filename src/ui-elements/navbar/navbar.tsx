// src/App.js
import React from 'react';
import '../../../src/screens/home/pages/home/home.scss';
import { Route, Link,Routes } from 'react-router-dom';
// import LoginPage from './Login';
// import HomePage from './HomePage';
// import TaskPage from './TaskPage';
import Task from '../../screens/admin/addtask';
import Login from '../../screens/auth/login/login';
import Home from '../../screens/pages/home/home';

const Navigation = () => (
  <nav>
    <h2 className='animate__animated animate__bounce container'>Task Manager</h2>
    <br></br>
    <ul>
    <li className="animate__animated animate__shakeX">
        <Link to="/login">Login</Link>
      </li>
      <li className="animate__animated animate__shakeX">
        <Link to="/register">Register</Link>
      </li>
      <li className="animate__animated animate__shakeX">
        <Link to="/addtask"> Add Task</Link>
      </li>
      <li className="animate__animated animate__shakeX">
        <Link to="/viewtask"> View Task</Link>
      </li>
      <li className="animate__animated animate__shakeX">
        <Link to="/viewtaskBy"> View Task By</Link>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
