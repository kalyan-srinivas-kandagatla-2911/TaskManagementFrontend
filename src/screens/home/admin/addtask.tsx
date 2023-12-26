// src/App.js
import React, { useState } from 'react';
// import './App.css';

const TaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [assignedUsers, setAssignedUsers] = useState<{ name: string; email: string; }[]>([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleAddUser = () => {
    if (userName && userEmail) {
      setAssignedUsers([...assignedUsers, { name: userName, email: userEmail }]);
      setUserName('');
      setUserEmail('');
    } else {
      alert('Please enter both name and email for the user.');
    }
  };

  const handlePublish = () => {
    if (taskName && assignedUsers.length > 0) {
      // In a real-world scenario, you would likely send this data to a backend
      // for processing and storage.
      console.log('Task Name:', taskName);
      console.log('Assigned Users:', assignedUsers);
      alert('Task published successfully!');
    } else {
      alert('Please enter task name and assign at least one user.');
    }
  };

  return (
    <div className="container">
      <h2>Task Page (Admin)</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Assign to Users:
        <div>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
        <ul>
          {assignedUsers.map((user, index) => (
            <li key={index}>{`${user.name} (${user.email})`}</li>
          ))}
        </ul>
      </label>
      <br />
      <button onClick={handlePublish}>Publish Task</button>
    </div>
  );
};

function Task() {
  return (
    <div className="App">
      <TaskPage />
    </div>
  );
}

export default Task;
