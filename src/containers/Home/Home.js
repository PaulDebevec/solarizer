import React, {useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [ address, updateAddress ] = useState('')
  const [ city, updateCity] = useState('')
  const [ state, updateState ] = useState('')
  const [ zipCode, updateZipCode] = useState('')
  const [ error, udpateError] = useState('false')


  const handleSubmit = () => {
    if (!address){

    }
  }

  return (
    <div className="home-container">
      <form className="address-form">
        <p className="error-message">New user?</p>
        <h3 className="form-title">Start Solarizing Now:</h3>
        <input
            type="text"
            name="address"
            placeholder="street address"
            value={address}
            required
            onChange={e => updateAddress(e.target.value)}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            value={city}
            required
            onChange={e => updateCity(e.target.value)}
          />
          <input
            type="text"
            name="state"
            placeholder="state (ex: CO)"
            value={state}
            required
            onChange={e => updateState(e.target.value)}
          />
          <input
            type="number"
            maxLength ="5"
            name="zipCode"
            placeholder="zip code"
            value={zipCode}
            required
            onChange={e => updateZipCode(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
      </form>
      <section className="ecotip">

      </section>
    </div>
  );
}

export default Home;
