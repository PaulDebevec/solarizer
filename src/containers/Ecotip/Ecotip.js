import React, { useEffect, useState } from 'react';
import './Ecotip.css';
import { useLocation } from 'react-router-dom';

const Ecotip = () => {
  const [ecotip, setEcotip] = useState('');

  async function fetchEcotip() {
    await fetch('https://secret-meadow-99085.herokuapp.com/api/v1/tips')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(response => setEcotip(response.description))
  }

  let history = useLocation()

  useEffect(() => {
    fetchEcotip()
  }, [history])


  return (
    <div className="ecotip-container">
      <div className="ecotip-card">
        <h3 className="ecotip-title">Ecotip</h3>
        <p className="ecotip-content">{ecotip}</p>
      </div>
    </div>
  );
}

export default Ecotip;
