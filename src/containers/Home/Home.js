import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import './Home.css';
import * as actions from '../../actions';
import { connect } from 'react-redux'
import ListOfStates from './ListOfStates';
import sun from '../../images/sun.svg'

const Home = ({ setCurrentProfile }) => {
  // const [name, updateName] = useState('')
  const [address, updateAddress] = useState('')
  const [city, updateCity] = useState('')
  const [state, updateState] = useState('')
  const [zipCode, updateZipCode] = useState('')
  const [error, updateError] = useState('')
  const [validatedUser, updateValidatedUser] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (zipCode.length !== 5 || !state) {
      return updateError('Please fill all Inputs')
    }
    const userProfile = { address, city, state, zipCode, validatedUser: true}
    setCurrentProfile(userProfile);
    updateValidatedUser(true)
  }

  return (
    <>
      {validatedUser && <Redirect to="/configure" />}
      <div className="home-container">
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
          {/* <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            required
            onChange={e => updateName(e.target.value)}
          /> */}
          <div className="home-form-inputs-section">
          <div className="home-form-item">
            <label>Street Address</label>
            <input
              type="text"
              name="address"
              value={address}
              required
              onChange={e => updateAddress(e.target.value)}
              />
            </div>

            <div className="city-state">
              <div className="home-form-item">
              <div className="city-label">
                <label>City</label>
                <input
                  id="city-input"
                  type="text"
                  name="city"
                  value={city}
                  required
                  onChange={e => updateCity(e.target.value)}
                />
              </div>
              </div>
              <div id="list-of-states-component">
                <ListOfStates state={state} onChange={(state) => updateState(state)} />
              </div>
            </div>
          <div className="home-form-item">
            <label>Zip Code</label>
            <input
              type="number" maxLength="5"
              name="zipCode"
              value={zipCode}
              required
              onChange={e => updateZipCode(e.target.value)}
            />
          </div>
        </div>
          <button className="home-btn" type="submit">Begin</button>
        <Link to="/solarizerfaq">
            <p className="what-is-solarizer">What is Solarizer?</p>
        </Link>
        </form>
        <section className="ecotip">
        </section>
      </div>
    </>
  );
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  setCurrentProfile: (userProfile) => dispatch(actions.currentUserProfile(userProfile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
