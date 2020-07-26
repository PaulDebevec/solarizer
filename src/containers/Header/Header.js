import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import sun from '../../images/sun.svg'
import { connect } from 'react-redux'
import * as actions from '../../actions';

const Header = ({ user, solarData, clearAllData }) => {

  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="title">S</h1>
        <img src={sun} alt="sun" />
        <h1 className="title">larizer</h1>
      </div>
      <nav className="nav-container">
        {solarData &&
          <NavLink to="/results" className="nav">
            {" "}
          Results{" "}
          </NavLink>
        }
        {solarData &&
          <NavLink to="/chart" className="nav">
            Charts{" "}
          </NavLink>
        }
        {user &&
          <NavLink to="/" exact className="nav"
            onClick={clearAllData}>
            New Address
          </NavLink>
        }
      </nav>
    </div>
  );

}
const mapStateToProps = (state) => ({
  user: state.userProfile,
  solarData: state.solarData.solRadMonthly
})

const mapDispatchToProps = (dispatch) => ({
  clearAllData: () => dispatch(actions.clearAllData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
