/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
// import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/pages/home/home";
import Login from "./screens/auth/login/login";
import Register from "./screens/auth/register/register";
import AddTask from "./screens/admin/addtask";
import Nav from "./ui-elements/navbar/navbar";
import ViewTasks from "./screens/admin/tasksTo";
import ViewTasksBy from "./screens/admin/tasksBy";

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/addtask" element={<AddTask/>}/>
              <Route path="/viewtask" element={<ViewTasks/>}/>
              <Route path="/viewtaskBy" element={<ViewTasksBy/>}/>

            </Routes>
          </BrowserRouter>
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
