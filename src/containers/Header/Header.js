import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import sun from '../../images/sun.svg'

const Header = () => {
  const [user, updateUser] = useState('')

  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="title">S</h1>
        <img src={sun} alt="sun" />
        <h1 className="title">larizer</h1>
      </div>
      <div className="buttons">
        {user &&
          <p>Welcome, {user}</p>
        }
        <Link to="/home">
          {user &&
            <button>Home</button>
          }
        </Link>
        <Link to="/">
          <button>{user ? 'Logout' : 'Login'}</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
