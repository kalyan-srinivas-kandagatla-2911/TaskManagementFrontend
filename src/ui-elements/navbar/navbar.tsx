// src/App.js
import React from 'react';
import './navbar.css';
import { Route, Link,Routes } from 'react-router-dom';
// import LoginPage from './Login';
// import HomePage from './HomePage';
// import TaskPage from './TaskPage';
import Task from '../../screens/home/admin/addtask';
import Login from '../../screens/home/auth/login/login';
import Home from '../../screens/home/pages/home';

const Navigation = () => (
  <nav>
    <ul className='horizontal-list'>
    <li className='horizontal-list-item'>
        <Link to="/login">Login</Link>
      </li>
    <li className='horizontal-list-item'>
        <Link to="/register">Sign-Up</Link>
      </li>
      <li className='horizontal-list-item'>
        <Link to="/task">Task</Link>
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
