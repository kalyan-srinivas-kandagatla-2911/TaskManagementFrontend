import React, { useState } from 'react';
import users from '../users.json'; // Update the path accordingly

const TaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [assignedUsers, setAssignedUsers] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.teamName.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddUser = () => {
    if (selectedUser) {
      setAssignedUsers([...assignedUsers, selectedUser]);
    } else {
      alert('Please select a user.');
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
            placeholder="Search users..."
            value={searchText}
            onChange={handleSearchChange}
          />
          <select onChange={handleUserChange} value={selectedUser}>
            <option value="">Select a user</option>
            {filteredUsers.map((user) => (
              <option key={user.email} value={user.email}>
                {user.name} - {user.teamName}
              </option>
            ))}
          </select>
          <button onClick={handleAddUser}>Add User</button>
        </div>
        <ul>
          {assignedUsers.map((user, index) => (
            <li key={index}>{user}</li>
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
