import React, {useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [ address, updateAddress ] = useState('')
  const handleSubmit = () => {
    console.log(address);
  }

  return (
    <div className="home-container">
      <section className="address-form">
        <h3 className="form-title">Enter your address</h3>
        <input
            type="search"
            name="address"
            placeholder="Address"
            value={address}
            onChange={e => updateAddress(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
      </section>
      <section className="ecotip">

      </section>
    </div>
  );
}

export default Home;
