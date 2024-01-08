// import React, { useState, useEffect } from 'react';
// import tasksData from '../tasks'; // Update the path accordingly

// const ViewTasks = () => {
//   const [tasks, setTasks] = useState<any[]>([]);
//   const [selectedTask, setSelectedTask] = useState<any | null>(null);

//   useEffect(() => {
//     // Set initial tasks
//     setTasks(tasksData);
//   }, []);

//   const handleTaskSelect = (taskId: string) => {
//     const task = tasks.find((t) => t.taskName === taskId);
//     setSelectedTask(task || null);
//   };

//   return (
//     <div className="container">
//       <h2>View Tasks</h2>
//       <div>
//         <h3>Select a Task:</h3>
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.taskName} onClick={() => handleTaskSelect(task.taskName)}>
//               {task.taskName}
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedTask && (
//         <div>
//           <h3>Task Details:</h3>
//           <p>Task Name: {selectedTask.taskName}</p>
//           <p>Admin Name: {selectedTask.adminName}</p>
//           <p>Deadline: {selectedTask.deadline}</p>
//           <h4>Assigned Users:</h4>
//           <ul>
//             {selectedTask.assignedUsers.map((user: any) => (
//               <li key={user.email}>
//                 {user.name} - {user.teamName} ({user.email})
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewTasks;
export {}