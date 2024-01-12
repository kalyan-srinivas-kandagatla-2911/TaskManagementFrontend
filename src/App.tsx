/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
// import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/pages/home/home";
import Login from "./screens/auth/login/login";
import Register from "./screens/auth/register/register";
// import AddTask from "./screens/admin/addtask";
import Nav from "./ui-elements/navbar/navbar";
import ViewTasks from "./screens/admin/tasksTo";
import ViewTasksBy from "./screens/admin/tasksBy";
import TaskManager from "./screens/pages/taskManager/taskManager";

function App() {

  const { device } = useSelector((state: RootState) => state.windowSize);
  console.log(device);
  return (
    <div className="App">
      {/* <div className="card-track">
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image"></div>
      <div> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.2/css/ionicons.min.css" integrity="sha384-pzjw8PP84r5J3pvLvlJyE6G+KEPkc4R8FQ2s8BYyNjuN8dV57D5+As/LWrRT2hy7" crossOrigin="anonymous"/> */}

      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    
  />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              {/* <Route path="/addtask" element={<AddTask/>}/> */}
              <Route path="/viewtask" element={<ViewTasks/>}/>
              <Route path="/viewtaskBy" element={<ViewTasksBy/>}/>
              <Route path="/taskManager" element={<TaskManager />}/>


            </Routes>
          </BrowserRouter>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

      </div>
  //     </div>
  //     </div>
  //     </div>
  //     {/* <script src="animation.js"></script> */}
  // {/* <script src="other-script.js"></script> */}
  //   </div>
  );
}

export default App;
