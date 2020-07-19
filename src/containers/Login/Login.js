import React, {Component} from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import './Login.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      isValidated: false
    }
  }

  render() {
    return (
      <div>
        <Link to="/home">
          <button>Log In</button>
        </Link>
      </div>
    );
  }
}

export default Login;
