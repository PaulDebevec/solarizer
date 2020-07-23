import React, { useEffect, useState } from 'react';
import './Ecotip.css';

const Ecotip = () => {
  const [ecotip, setEcotip] = useState('');

  useEffect(() => {
    fetch('endpoint_url') // replace with actual URL or environmental variable
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(data => console.log(data.ecotip)) // might hang here -- troubleshooting only
      .then(response => setEcotip(response.data.ecotip))
  }, []) // [] may be unnecessary to put in [ecotip, setEcotip] since it won't change on its own <- could also cause a stack overflow like an endless loop

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
