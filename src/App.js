import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <div className="header-logo">KHC Blog</div>
        <nav className="top-nav">
          <ul className="top-toolbar">
            <li className='top-menu'>홈</li>
            <li className='top-menu'>글쓰기</li>
            <li className='top-menu'>로그인</li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
        </div>
    </div>
  );
}

export default App;
