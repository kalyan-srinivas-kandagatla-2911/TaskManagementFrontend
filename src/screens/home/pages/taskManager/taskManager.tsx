import React from 'react'
import tasks from "../../tasks.json"
type TaskMangerProps ={}

const TaskManager:React.FC<TaskMangerProps> = () => {
  return (
    <div className='taskManager' >
      <table>
        <thead>
          <th>S.no</th>
          <th>taskTitle</th>
          <th>Task Description</th>
          <th>Task Start Date</th>
          <th>Task End Date </th>
          <th>Task assigned to </th>
          <th>Task Assigned By </th>
          
        </thead>
        <tbody>
          
            {tasks.map((value, index) => (
              <tr>
                  <td>
                  {/* {value.sno} */}
                </td>
                <td>
                    {value.title}
                  </td>
                  <td>
                    {value.description}
                  </td>
                  <td>
                    {value.startdate}
                  </td>
                  <td>
                    {value['enddate']}
                  </td>
                  <td>
                    {value['TaskAssignedBy']}
                  </td>
                  {/* <td>
                    {value['TaskAssignedto']}
                  </td> */}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskManager
