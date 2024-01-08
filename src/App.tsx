/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
// import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/pages/home/home";
import Login from "./screens/home/auth/login/login";
import Register from "./screens/home/auth/register/register";
import AddTask from "./screens/home/admin/addtask";
import Nav from "./ui-elements/navbar/navbar";
import ViewTasks from "./screens/home/admin/task";

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
