import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from '../Home/Home'
import Header from '../Header/Header'
import Configure from '../Configure/Configure';
import Historical from '../Historical/Historical';
import { connect } from 'react-redux'
import Chart from '../Charts/Chart';

const App = (props) => {
  console.log('validatedUser', props);


  return (
    <div class="app-container">
      {props.validatedUser && <Header />}
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home />} 
        /> 
        {props.validatedUser ? 
          <Route
          path="/configure"
          exact
          render={() => <Configure />}
          /> : <Redirect to="/" />
        }
        <Route
          path="/chart"
          exact
          render={() => <Chart />}
        />
        <Route
          path="/historical"
          exact
          render={() => <Historical />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  validatedUser: state.userProfile.validatedUser
})


export default connect(mapStateToProps, null)(App);
