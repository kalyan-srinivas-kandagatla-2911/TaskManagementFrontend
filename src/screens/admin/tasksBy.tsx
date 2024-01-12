import React, { useState, useEffect } from 'react';
import tasksData from '../../../home/tasks.json';

const ViewTasksBy = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const handleTaskSelect = (taskId: string) => {
    const task = tasks.find((t) => t.taskId === taskId);
    setSelectedTask(task || null);
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    setSelectedTask(null); // Reset selected task when status changes
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileSubmit = () => {
    if (selectedTask && selectedFile) {
      // Handle file submission logic here
      console.log('File submitted for task:', selectedTask.title);
      console.log('Selected File:', selectedFile);
    } else {
      alert('Please select a task and a file before submitting.');
    }
  };

  const filteredTasks = selectedStatus
    ? tasks.filter((task) => task.taskStatus === selectedStatus)
    : tasks;

  return (
    <div className="container">
      <h2>View Tasks</h2>
      <div>
        <h3>Filter by Status:</h3>
        <nav>
          <ul>
            <li onClick={() => handleStatusSelect('Pending')}>Pending</li>
            <li onClick={() => handleStatusSelect('Submitted')}>Submitted</li>
            <li onClick={() => handleStatusSelect('Approved')}>Approved</li>
            <li onClick={() => handleStatusSelect('Expired')}>Expired</li>
          </ul>
        </nav>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Admin Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <React.Fragment key={task.taskId}>
              <tr
                onClick={() => handleTaskSelect(task.taskId)}
                className={selectedTask?.taskId === task.taskId ? 'selected' : ''}
              >
                <td>{task.title}</td>
                <td>{task.deadline}</td>
                <td>{task.TaskAssignedBy}</td>
              </tr>
              {selectedTask && selectedTask.taskId === task.taskId && (
                <tr className="details-row">
                  <td colSpan={4}>
                    <p>Task Description: {task.description}</p>
                    <h4>Assigned Users:</h4>
                    <ul>
                      {task.TaskAssignedto.map((user: any) => (
                        <li key={user.email}>
                          {user.name} ({user.email})
                        </li>
                      ))}
                    </ul>
                    <div>
                      <input placeholder='bkcnrk' type="file" onChange={handleFileChange} />
                      <button onClick={handleFileSubmit}>Submit</button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTasksBy;
