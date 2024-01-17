// import React, { useContext, useEffect, useState } from "react";
// import { Status, Task } from "../../../types/task";
// import "./taskManager.scss";
// // import Cards from "../../../components/cards/cards";
// // import Navbar from "../../../components/navbar/navbar";
// // import {
// //   useGetTasksQuery,
// //   useGetUserTasksQuery,
// // } from "../../../generated/graphql";
// import MessagePopup from "../../../ui-elements/messagePopup/messagePopup";
// import shaastraLogo from "../../../assets/logos/ShaastraLogoWhite.png";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/reducers";
// import { AuthContext } from "../../../utils/authProvider";
// import EmptyContainer from "../../../components/emptyContainer/emptyContainer";
// import { useGetTaskAssignedToMeQuery } from "../../../generated/graphql";

// type TaskManagerProps = {};

// const TaskManager: React.FC<TaskManagerProps> = () => {
//   const { user } = useContext(AuthContext);

//   // const { loading: taskLoading, error: taskError, data } = useGetTasksQuery();
  // const { data, loading, error } = useGetTaskAssignedToMeQuery({
  //   variables: {
  //       data: {
  //         user_id: user.id
  //       }
  //   },
  // });

//   const [allTasks, setAllTasks] = useState<Task[]>([]);
//   const [tasksAssignedToMe, setTasksAssignedToMe] = useState<Task[]>([]);

//   const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
//   const [expiredTasks, setExpiredTasks] = useState<Task[]>([]);
//   const [submittedTasks, setSubmittedTasks] = useState<Task[]>([]);
//   const [approvedTasks, setApprovedTasks] = useState<Task[]>([]);

//   // useEffect(() => {
//   //   if (data)
//   //     setAllTasks(
//   //       data.getTasks.map((item) => {
//   //         return {
//   //           ...item,
//   //           status: "Pending",
//   //         };
//   //       })
//   //     );
//   //   if (userData?.getUserTasks)
//   //     setUserTasks(
//   //       userData.getUserTasks.map((item) => {
//   //         return {
//   //           ...item.task,
//   //           sub_id: item.id,
//   //           files: item.files,
//   //           points: item.points,
//   //           status: "Submitted",
//   //         };
//   //       })
//   //     );
//   // }, [data, userData]);
//   useEffect(() =>{
//     if(data)
//       setTasksAssignedToMe(
//         data.getTaskAssignedToMe.map((item) => {
//           ...item,
//           Status:"Pending"
//         })
//       );

//     },[data])

//     useEffect(() => {
      
//     })


//   // useEffect(() => {
//   //   if (allTasks) {
//   //     if (userTasks) {
//   //       setApprovedTasks([]);
//   //       setSubmittedTasks([]);
//   //       userTasks.map((item) => {
//   //         if (item.points)
//   //           setApprovedTasks((current) => [
//   //             ...current,
//   //             {
//   //               ...item,
//   //               status: "Approved",
//   //             },
//   //           ]);
//   //         else
//   //           setSubmittedTasks((current) => [
//   //             ...current,
//   //             {
//   //               ...item,
//   //               status: "Submitted",
//   //             },
//   //           ]);
//   //       });
//   //     }
//   //     setPendingTasks([]);
//   //     setExpiredTasks([]);
//   //     const now = new Date();
//   //     allTasks.map((item, i) => {
//   //       if (!userTasks.find((userItem) => userItem.id === item.id)) {
//   //         if (now > new Date(item.deadline))
//   //           setExpiredTasks((current) => [
//   //             ...current,
//   //             {
//   //               ...item,
//   //               status: "Expired",
//   //             },
//   //           ]);
//   //         else
//   //           setPendingTasks((current) => [
//   //             ...current,
//   //             {
//   //               ...item,
//   //               status: "Pending",
//   //             },
//   //           ]);
//   //       }
//   //     });
//   //     setTasks(pendingTasks);
//   //     setActiveStatus("Pending");
//   //   }
//   // }, [allTasks, userTasks]);

//   const [tasks, setTasks] = useState<Task[]>(pendingTasks);
//   const [activeStatus, setActiveStatus] = useState<Status>("Pending");

//   const { device } = useSelector((state: RootState) => state.windowSize);

//   return (
//     <div className="tasks-page">
//       {/* {taskError && (
//         <MessagePopup
//           message="Error in loading"
//           position="top-center"
//           category="warning"
//           delay={3}
//         />
//       )}
//       {userError && (
//         <MessagePopup
//           message="Error in loading"
//           position="top-center"
//           category="warning"
//           delay={3}
//         />
//       )} */}
//       <div className="navbar-wrapper">
//       </div>
//         <div className= {`tasks-header-container ${device}`}>
//           <div className={`tasks-heading ${device}`}>Tasks</div>
//           <div className="status-box-container">
//             <div
//               className={`box ${
//                 activeStatus === "Pending" ? "active" : ""
//               } ${device}`}
//               onClick={() => {
//                 setActiveStatus("Pending");
//                 setTasks(pendingTasks);
//               }}
//             >
//               Pending
//             </div>
//             <div
//               className={`box ${
//                 activeStatus === "Submitted" ? "active" : ""
//               } ${device}`}
//               onClick={() => {
//                 setActiveStatus("Submitted");
//                 setTasks(submittedTasks);
//               }}
//             >
//               Submitted
//             </div>
//             <div
//               className={`box ${
//                 activeStatus === "Approved" ? "active" : ""
//               } ${device}`}
//               onClick={() => {
//                 setActiveStatus("Approved");
//                 setTasks(approvedTasks);
//               }}
//             >
//               Approved
//             </div>
//             <div
//               className={`box ${
//                 activeStatus === "Expired" ? "active" : ""
//               } ${device}`}
//               onClick={() => {
//                 setActiveStatus("Expired");
//                 setTasks(expiredTasks);
//               }}
//             >
//               Expired
//             </div>
//           </div>
//           {/* {taskLoading || userLoading ? (
//             <div className="ring">
//               <img alt="" src={shaastraLogo} height={"40px"} />
//               <span></span>
//             </div>
//           ) : (
//               tasks.length === 0 ? 
//               <EmptyContainer text={`No ${activeStatus} Tasks`}/>
//               :
//               <div className={`card-wrapper`}>
//                 {tasks.map((task, index) => (
//                   <Cards
//                     key={index}
//                     task={task}
//                     refetch={() => refetch({ data: user.id })}
//                   ></Cards>
//                 ))}
//               </div>
//           )} */}
//         </div>
//     </div>
//   );
// };

// export default TaskManager;

import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../utils/authProvider';
import { useGetTaskAssignedToMeQuery } from '../../../generated/graphql';
import { Task } from '../../../types/task';

const TaskManager = () => {
  const { user } = useContext(AuthContext)
  const [taskAssignedToMe, setTaskAssignedToMe] = useState<Task[]>([]);
  const [dati, setDati] = useState<Task[]>([])
  const [submittedTasks, setSubmittedTasks] = useState();
  const { data, loading, error } = useGetTaskAssignedToMeQuery({
    variables: {
        data: {
          user_id: user.id
        }
    },
  });
  // useEffect(() => {
  //   console.log(data)
  // },[data])

  useEffect(() => {
    if(data){
      console.log(data)
    }
  }, [data]);


  // const fetchData = async() => {
  //   try {
  //     let response = await fetch("http://localhost:9000/graphql")
  //     let result = await response.json()
  //     console.log(result)
  //     setTaskAssignedToMe(result)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  // console.log(fetchData)
  // console.log(data)
  // console.log(data)
  // console.log(taskAssignedToMe)
  // useEffect(() => {
  //   if(data){
  //     setTaskAssignedToMe(data)
  //   }
  // },[data])
  // console.log(data?.getTaskAssignedToMe.map((item) => {
  //   item.id
  // }))
  return (
    <div className='taskManager' >
      {/* {taskAssignedToMe.map((item) => return {
        
      })} */}
      {/* {data?.getTaskAssignedToMe.forEach((item) => return {
        item.assignedBy
      })} */}
      {/* {taskAssignedToMe} */}
    {/*       
      <table>
       <tbody>
          {taskAssignedToMe.map((item, value) => {
            console.log(item)
            return <>
            <tr  >
              <td >{item.title}</td>
              <td >{item.description}</td>
              <td >{item.deadline?.toLocaleString() || undefined}</td>
            </tr> */}
              {/* <th>{item .toLocaleString() || undefined}</th> */}
              {/* <th>{item.deadline?.toLocaleString() || undefined}</th> */}
            {/* </>
})}
       </tbody>
      </table> */}
    </div>
  )
}

export default TaskManager
