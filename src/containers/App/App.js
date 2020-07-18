import React, {Component} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Login from '../Login/Login'
import Home from '../Home/Home'
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Login />}
          />
          <Route
            path="/home"
            exact
            render={() => <Home />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
