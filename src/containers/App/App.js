import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from '../Home/Home'
import Ecotip from '../Ecotip/Ecotip'
import Header from '../Header/Header'
import Configure from '../Configure/Configure';
import Historical from '../Historical/Historical';
import { connect } from 'react-redux'

const App = (props) => {
  console.log('validatedUser', props);


  return (
    <>
      {props.validatedUser && <Header />}
      <div className="background-container">
        <Ecotip />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home />}
          />
          <Route
            path="/configure"
            exact
            render={() => <Configure />}
          />
          <Route
            path="/historical"
            exact
            render={() => <Historical />}
          />
        </Switch>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  validatedUser: state.userProfile.validatedUser
})


export default connect(mapStateToProps, null)(App);
