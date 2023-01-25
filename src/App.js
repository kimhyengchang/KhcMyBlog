import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home'
import Main from './components/main/Main'
function App() {
  return (
      <div className='App'>
        <Topbar/>
          <div className="container">
            <Sidebar />
            <Home />
          </div>
      </div>
  );
}

export default App;
