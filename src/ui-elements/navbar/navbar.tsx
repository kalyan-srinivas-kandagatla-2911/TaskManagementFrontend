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
    <ul>
      <li>
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
