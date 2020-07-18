import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">☀️Solarizer☀️</h1>
      <div className="buttons">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
