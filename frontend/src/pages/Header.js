// Header.js
import React, { useState } from "react";
import "../styles/Header.css"; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-gray-100">
      <header className="main-header">
        {/* 1. App Name / Logo */}
        <div className="app-name">Alzheimer's Prediction</div>

        {/* 2. Navigation Links */}
        <nav className="main-nav">
          <ul>
            {/* Use the <a> tag with href="#" for simple links, 
              or use <Link to="/path"> if you are using React Router */}
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/WhatToDo">What To do?</a>
            </li>
            <li>
              <a href="/detection">Predict</a>
            </li>
            <li>
              <a href="/quiz">Quiz</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/signup">SignUp</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
