import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <div className="header-logo">KHC Blog</div>
        <nav className="top-nav">
          <ul>
            <li>글목록</li>
            <li>글쓰기</li>
            <li>로그인</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
