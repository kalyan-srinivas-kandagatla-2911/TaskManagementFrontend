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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/task">Tasks</Link>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/task" Component={Task} />
      <Route  path="/" Component={Home} />
      </Routes> */}
    </div>
  );
}

export default App;
