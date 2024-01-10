import React, { useState } from 'react';
import users from '../users.json'; // Update the path accordingly

const TaskPage = () => {
  const [taskName, setTaskName] = useState('');
  // const[taskStatus,setTaskStatus]=useState('');
  const [assignedUsers, setAssignedUsers] = useState<{ email: string; name: string; teamName: string }[]>([]);
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

  const handlePublish = () => {
    if (taskName && assignedUsers.length > 0 && selectedDate) {
      // In a real-world scenario, you would likely send this data to a backend
      // for processing and storage.
      console.log('Task Name:', taskName);
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
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
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


// export default function AddTask(){
//   const [title, settitle] = useState();
//   const [description, setdescription] = useState();
//   const [start, setstart] = useState();
//   const [end, setend] = useState();
//   let teamoneusers: any[] = [];
//   for( let i = 0; i < users.length ; i ++ ){
//     if( users[i].teamName = "Team_One") 
//     {
//       teamoneusers.push(users[i])
//     }
//   }
//   // let teamtwousers = 
//   console.log(teamoneusers)
//   return(
//     <div className="addTask">
//       <input type="text" placeholder="title"  
//       // onChange={HTMLInputElement} 
//       />
//       <input type="text" placeholder="description" />
//       <input type="date" placeholder="start date " />
//       <input type="date" placeholder="end date" />
//       <label htmlFor="">Assign task to user </label>
//       <select required title="teamoneusers" name="teamoneusers" >
//         <optgroup label="team_one" >
//           {teamoneusers.map((user, value) => (
//             <option key={value} value={user.email}>{user.name}</option>
//           ))}
//         </optgroup>
//         <optgroup label="team_two" >
//           {teamoneusers.map((user, value) => (
//             <option key={value} value={user.email}>{user.name}</option>
//           ))}
//         </optgroup>
//       </select>
//     </div>
//   )
// }