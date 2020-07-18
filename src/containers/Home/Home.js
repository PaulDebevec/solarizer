import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './Home.css';
import * as actions from '../../actions';
import { connect } from 'react-redux'
import ListOfStates from './ListOfStates';

const Home = (props) => {
  const [name, updateName] = useState('')
  const [address, updateAddress] = useState('')
  const [city, updateCity] = useState('')
  const [state, updateState] = useState('')
  const [zipCode, updateZipCode] = useState('')
  const [error, updateError] = useState('')
  const [validatedUser, updateValidatedUser] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || address === '' || city === '' || (zipCode.length !== 5) || state === '') {
      updateError('Please fill all Inputs')
    } else {
      updateError('')
      const userProfile = createUpdatedUser()
      props.setCurrentProfile(userProfile);
      clearInputs()
      updateValidatedUser(true)
    }
  }

  const createUpdatedUser = () => {
    // const userAddress = address !== '' ? address : null
    // const userCity = city !== '' ? city : null
    // const userState = state !== '' ? state : null
    // const userZipCode = zipCode !== '' ? zipCode : null

    // return {
    //   userAddress: userAddress,
    //   userCity: userCity,
    //   userState: userState,
    //   userZipCode: userZipCode,
    // }
    return { name, address, city, state, zipCode }
  }

  const clearInputs = () => {
    updateName('')
    updateAddress('')
    updateCity('')
    updateState('')
    updateZipCode('')
  }

  return (
    <>
      {validatedUser && <Redirect to="/configure" />}
      <div className="home-container">
        <form className="address-form">
          <p className="error-message">New user?</p>
          <h3 className="form-title">Start Solarizing Now:</h3>
          {error &&
            <p className="error">{error}</p>
          }
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            required
            onChange={e => updateName(e.target.value)}
          />
          <input
            type="text"
            name="address"
            placeholder="street address"
            value={address}
            required
            onChange={e => updateAddress(e.target.value)}
          />
          <div className="city-state">
            <input
              type="text"
              name="city"
              placeholder="city"
              value={city}
              required
              onChange={e => updateCity(e.target.value)}
            />
            <ListOfStates onChange={(state) => updateState(state)} />
          </div>
          <input
            type="number" maxLength="5"
            name="zipCode"
            placeholder="zip code"
            value={zipCode}
            required
            onChange={e => updateZipCode(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
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
