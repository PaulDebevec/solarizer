import React, { useState, useEffect } from 'react';
import { Redirect, Link } from "react-router-dom";
import './Home.css';
import * as actions from '../../actions';
import { connect } from 'react-redux'
import ListOfStates from './ListOfStates';
import sun from '../../images/sun.svg'

const Home = ({ setCurrentProfile, user, loadSolarFaqs }) => {
  const [address, updateAddress] = useState('')
  const [city, updateCity] = useState('')
  const [state, updateState] = useState('')
  const [zipCode, updateZipCode] = useState('')
  const [error, updateError] = useState('')
  const [validatedUser, updateValidatedUser] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!state) {
      return updateError('Please select a state')
    }
    if (zipCode.length !== 5) {
      return updateError('Zip code must be 5 digits')
    }
    const userProfile = { address, city, state, zipCode, validatedUser: true }
    setCurrentProfile(userProfile);
    updateValidatedUser(true)
  }

  useEffect(() => {
    async function fetchSolarFaqs() {
    await fetch('https://secret-meadow-99085.herokuapp.com/api/v1/faq')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch')
      }
      return response.json()
    })
    .then(response => loadSolarFaqs(response))
    .catch((error) => {
      window.alert(`Server Error. It's not your fault the error is: ${error}`)
    })
  }
  fetchSolarFaqs()
}, [loadSolarFaqs])

  return (
    <>
      {user && <Redirect push to="/configure" />}
      {validatedUser && <Redirect push to="/configure" />}
      <form className="address-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="header-title">
          <h1 className="title">S</h1>
          <img src={sun} alt="sun" />
          <h1 className="title">larizer</h1>
        </div>
        <h3 className="form-title">Start Solarizing Now:</h3>
        {error &&
          <p className="error">{error}</p>
        }
        <div className="home-form-inputs-section">
          <div className="home-form-item">
            <label>Street Address
              <input
                data-testid="street-address"
                type="text"
                name="address"
                value={address}
                required
                onChange={e => updateAddress(e.target.value)}
              />
            </label>
          </div>
          <div className="city-state">
            <div className="home-form-item">
              <div className="city-label">
                <label>City
                  <input
                    data-testid="city"
                    id="city-input"
                    type="text"
                    name="city"
                    value={city}
                    required
                    onChange={e => updateCity(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div id="list-of-states-component">
              <ListOfStates state={state} onChange={(state) => updateState(state)} />
            </div>
          </div>
          <div className="home-form-item">
            <label>Zip Code
              <input
                title="zip-code"
                type="number" maxLength="5"
                name="zipCode"
                value={zipCode}
                required
                onChange={e => updateZipCode(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button className="home-btn" type="submit">Begin</button>
        <Link to="/solarizerfaq">
          <p className="what-is-solarizer">What is Solarizer?</p>
        </Link>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.userProfile.validatedUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentProfile: (userProfile) => dispatch(actions.currentUserProfile(userProfile)),
  loadSolarFaqs: (data) => dispatch(actions.loadSolarFaqs(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
