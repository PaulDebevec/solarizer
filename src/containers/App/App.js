import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Login from '../Login/Login'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Configure from '../Configure/Configure';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: ''
    }
  }

  render() {
    return (
      <div>
        {this.state.user && <Header />}
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
          <Route
            path="/configure"
            exact
            render={() => <Configure/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
