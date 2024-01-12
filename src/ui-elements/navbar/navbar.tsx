// src/App.js
import React from 'react';
import './navbar.css';
import { Route, Link,Routes } from 'react-router-dom';
// import LoginPage from './Login';
// import HomePage from './HomePage';
// import TaskPage from './TaskPage';
import Task from '../../screens/admin/addtask';
import Login from '../../screens/auth/login/login';
import Home from '../../screens/pages/home/home';

const Navigation = () => (
  <nav>
    <ul>
    <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/addtask"> Add Task</Link>
      </li>
      <li>
        <Link to="/viewtask"> View Task</Link>
      </li>
      <li>
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
