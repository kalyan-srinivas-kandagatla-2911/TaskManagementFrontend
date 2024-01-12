import React, { useState } from 'react';
import users from '../../../home/users.json'; // Update the path accordingly
import { useCreateTaskMutation } from '../../generated/graphql';

const TaskPage = () => {
  const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation()
  const [title, setTitle] = useState('');
  // const[taskStatus,setTaskStatus]=useState('');
  const [assignedUsers, setAssignedUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [description, setDescription]=useState('');

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
      const userToAdd = users.find((user) => user.email === selectedUser);
      if (userToAdd) {
        // Check if the user is not already added
        if (!assignedUsers.find((user) => user.email === selectedUser)) {
          setAssignedUsers([...assignedUsers, userToAdd]);
        } else {
          alert('User is already added.');
        }
      }
    } else {
      alert('Please select a user.');
    }
  };

  const handleRemoveUser = (email: string) => {
    setAssignedUsers(assignedUsers.filter((user) => user.email !== email));
  };

  const handlePublish = async () => {
    if (title && assignedUsers.length > 0 && selectedDate) {
      try {
        await createTaskMutation({
          variables:{
            data:{
              title,
              assignTaskToUsers: assignedUsers,
              description: description,
              deadline:selectedDate
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
      console.log('Task Name:', title);
      // console.log('Task status',taskStatus);
      console.log('Assigned Users:', assignedUsers);
      console.log('Selected Date:', selectedDate);
      alert('Task published successfully!');
    } else {
      alert('Please enter task name, assign at least one user, and select a date.');
    }
    
  };
  return (
    <div className="container">
      <h2 className="animate__animated animate__bounce">Task Page (Admin)</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      
      <br />
      <label>
        Assign to Users:
        <div style={{ display: 'flex' }}>
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
          {assignedUsers.map((user) => (
            <li key={user.email}>
              {user.name} ({user.teamName}){' '}
              <button onClick={() => handleRemoveUser(user.email)}>Remove</button>
            </li>
          ))}
        </ul>
      </label>
      <label>
        Task's deadline:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>
      <label>Task's Description<input type="text"value={description}onChange={(e)=>setDescription(e.target.value)}></input></label>

      <br />
      <button onClick={handlePublish}>Publish Task</button>
    </div>
  );
};

function AddTask() {
  return (
    <div className="App">
      <TaskPage />
    </div>
  );
}

export default AddTask;
