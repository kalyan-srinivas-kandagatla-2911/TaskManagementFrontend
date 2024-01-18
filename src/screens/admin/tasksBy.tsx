import React, { useState, useEffect, useContext } from 'react';
import tasksData from "../../tasks.json";
import { useGetTasksAssignedByMeQuery } from '../../generated/graphql';
import { AuthContext } from '../../utils/authProvider';

const ViewTasks = () => {
  const { user } = useContext(AuthContext)
  const [tasksAssignedByMe, setTasksAssignedByMe] = useState<any[]>([]);
  const [pendingTasks, setPendingTasks] = useState<any[]>([])
  const [submittedTasks, setSubmittedTasks] = useState<any[]>([])
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
 const { data, loading, error } = useGetTasksAssignedByMeQuery({
    variables: {
       data: {
        user_id:user.id
       }
    },
  });
  useEffect(() => {
    if(data){
      setTasksAssignedByMe(data.getTasksAssignedByMe);
    }
  }, [data]);
  console.log(tasksAssignedByMe)

  // const handleTaskSelect = (tasksAssignedByMe.filter(task => task.id ): any) => {
  //   const task = tasks.find((t) => t.taskId === taskId);
  //   setSelectedTask(task || null);
  // };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    if(selectedStatus === "Pending"){
      setPendingTasks(tasksAssignedByMe.filter((task) => task.submission == true))
    }
  };
  console.log(pendingTasks)

  const handleApprove = () => {
    if (selectedTask && selectedTask.taskStatus === 'Submitted') {
      // Handle approval logic here
      console.log('Task approved:', selectedTask.title);
    } else {
      alert('Please select a task with status "Submitted" to approve.');
    }
  };

  // const filteredTasks = selectedStatus
  //   ? tasks.filter((task) => task.taskStatus === selectedStatus)
  //   : tasks;

  return (
    <div className="container">
      <h2 className="animate__animated animate__bounce">View Tasks</h2>
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

      {/* <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>CreatedAt</th>
            <th>updatedAt</th>
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
                      <button className="animate__animated animate__fadeInDown" onClick={handleApprove}>Approve</button>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ViewTasks;
