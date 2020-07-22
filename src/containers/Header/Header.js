import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import sun from '../../images/sun.svg'

const Header = () => {

  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="title">S</h1>
        <img src={sun} alt="sun" />
        <h1 className="title">larizer</h1>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );

}

export default Header;
