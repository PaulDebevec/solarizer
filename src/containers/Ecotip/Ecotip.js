import React, { useEffect, useState } from 'react';
import './Ecotip.css';

const Ecotip = () => {
  const [ecotip, setEcotip] = useState('');

  useEffect(() => {
    fetch('https://mysterious-brook-74907.herokuapp.com/ecotip')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(response => setEcotip(response.ecotip))
  }, [])

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
