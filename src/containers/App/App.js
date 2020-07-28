import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import * as actions from '../../actions';
import Home from '../Home/Home'
import Ecotip from '../Ecotip/Ecotip'
import Header from '../Header/Header'
import Configure from '../Configure/Configure';
import Historical from '../Historical/Historical';
import { connect } from 'react-redux'
import Chart from '../Charts/Chart';
import Results from '../Results/Results'
import Error from '../Error/Error'
import Faq from '../Faq/Faq'

const App = (props) => {

  async function fetchSolarFaqs() {
    await fetch('https://secret-meadow-99085.herokuapp.com/api/v1/faq')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch')
      }
      return response.json()
    })
    .then(response => props.loadSolarFaqs(response))
    .catch((error) => {
      window.alert(`Server Error. It's not your fault the error is: ${error}`)
    })
  }

  useEffect(() => {
    fetchSolarFaqs()
  }, [])

  return (
    <>
      <div className="background-container">
        {props.validatedUser && <Header />}
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
          <Route
            path="/chart"
            exact
            render={() => <Chart />}
          />
          <Route
            path="/results"
            exact
            render={() => <Results />}
          />
          <Route
            path="/solarizerfaq"
            exact
            render={() => <Faq />}
          />
          <Route path='*'  render ={ () => <Error />}/>
        </Switch>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  validatedUser: state.userProfile.validatedUser
})

const mapDispatchToProps = (dispatch) => ({
  loadSolarFaqs: (data) => dispatch(actions.loadSolarFaqs(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
