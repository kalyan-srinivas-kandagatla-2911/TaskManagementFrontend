import React, { useState, useEffect } from 'react';
import tasksData from '../../tasks.json';

const ViewTasks = () => {
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
      setSelectedFile(null); // Clear selected file after submission
    } else {
      alert('Please select a task and a file before submitting.');
    }
  };

  const getSubmittedFiles = () => {
    // Dummy list of submitted files
    return [
      { fileName: 'Document 1.pdf', submittedBy: 'User 1' },
      { fileName: 'Report.txt', submittedBy: 'User 2' },
      { fileName: 'Presentation.pptx', submittedBy: 'User 3' },
    ];
  };

  const submittedFiles = selectedTask?.taskStatus === 'Submitted' ? getSubmittedFiles() : [];

  const filteredTasks = selectedStatus
    ? tasks.filter((task) => task.taskStatus === selectedStatus)
    : tasks;

  return (
    <div className="container">
      <h2 className="animate__animated animate__bounce">View Tasks</h2>
      <div>
        <h3>Filter by Status:</h3>
        <nav>
          <ul>
            {selectedTask?.UsersLinked.map((user: any) => (
              <li key={user.email}>
                {user.name} - {user.teamName} ({user.email})
              </li>
            ))}
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
                <td>{task.taskStatus}</td>
                <td>{task.enddate}</td>
                <td>{task.TaskAssignedBy}</td>
              </tr>
              {selectedTask && selectedTask.taskId === task.taskId && (
                <tr className="details-row animate__animated animate__flipInX">
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
                    {selectedTask.taskStatus === 'Submitted' && (
                      <div>
                        <h4>Submitted Files:</h4>
                        <ul>
                          {submittedFiles.map((file, index) => (
                            <li key={index}>
                              {file.fileName} - Submitted by {file.submittedBy}
                            </li>
                          ))}
                        </ul>
                        {/* Remove the file input and submit button */}
                      </div>
                    )}
                    {selectedTask.taskStatus !== 'Submitted' && (
                      <div>
                        <input placeholder='choosefile' type="file" onChange={handleFileChange} />
                        <button onClick={handleFileSubmit}>Submit</button>
                      </div>
                    )}
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

export default ViewTasks;
