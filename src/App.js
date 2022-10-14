import React from "react";
import "./App.css"
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Userlist from "./pages/Userlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App=()=> {
  return (
    <>
    <BrowserRouter>
      <Topbar/>
      <div className = "container">
        <Sidebar/>
        <Routes>
             <Route exact path = "/" element = {<Login/>}></Route>
             <Route path = "/home" element = {<Home/>}></Route>
             <Route path = "/users" element = {<Userlist/>}></Route>
        </Routes>       
      </div>     
    </BrowserRouter>    
    </>
  );
}

export default App;
