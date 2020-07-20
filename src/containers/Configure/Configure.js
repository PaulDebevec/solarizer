import React, { useState, useEffect } from 'react'
import { } from "react-router-dom";
import './Configure.css';

const Configure = (props) => {
  const [systemSize, updateSystemSize] = useState('')
  const [moduleType, updateModuleType] = useState('')
  const [arrayType, updateArrayType] = useState('')
  const [systemLosses, updateSystemLosses] = useState('')
  const [tilt, updateTilt] = useState('')
  const [azimuth, updateAzimuth] = useState('')
  const [isLoading, setIsLoading] = useState(false)

useEffect(() =>{
  setIsLoading(true)
  fetch('https://developer.nrel.gov/api/pvwatts/v6.json?api_key=By8qOhq8GrFH18lkeImHNhinPb7jIbCbibKlQNsS&address=4521A S Crystal Way Aurora CO 80015&system_capacity=4&azimuth=180&tilt=20&array_type=0&module_type=0&losses=14')
  .then(response => {
    if (!response.ok){
      throw new Error('Failed to fetch')
    }
    return response.json()
  })
  .then(data => console.log(data.outputs))
}, [])

const handleSubmit = e => {
  e.preventDefault()
  console.log(e.target)
}

  return (
    <section className="configure-container">
      <h2>Enter in the following information to get a quote!</h2>
      <form onSubmit={handleSubmit}>
        <h3>Solar Array Configuration</h3>
        <div className="label-input-container">
          <label>System Size (kW):</label>
          <input
            type="number"
            placeholder="4"
            value={systemSize}
            required
            onChange={e => updateSystemSize(e.target.value)}
          />
        </div>
        <div className="label-input-container">
          <label>Module Type:</label>
          <select
            className="configure-selects"
            defaultValue={'DEFAULT'}
            onChange={e => updateModuleType(e.target.value)}
          >
            <option value='DEFAULT' disabled>Select Module..</option>
            <option value ={moduleType}>Standard</option>
            <option value={moduleType}> Premium</option>
            <option value={moduleType}>Thin Film</option>
          </select>
        </div>
        <div className="label-input-container">
          <label>Array Type:</label>
          <select
            className="configure-selects"
            defaultValue={'DEFAULT'}
            onChange={e => updateArrayType(e.target.value)}
          >
            <option value='DEFAULT' disabled>Select Array..</option>
            <option>Fixed (open rack)</option>
            <option>Fixed (roof mount)</option>
            <option>1-Axis Tracking</option>
            <option>1-Axis Backtracking</option>
            <option>2-Axis Tracking</option>
          </select>
        </div>
        <div className="label-input-container">
          <label>System Losses:</label>
          <input
            type="number"
            placeholder="14"
            value={systemLosses}
            required
            onChange={e => updateSystemLosses(e.target.value)}
          />
        </div>
        <div className="label-input-container">
          <label>Tilt:</label>
          <input
            type="number"
            placeholder="20"
            value={tilt}
            required
            onChange={e => updateTilt(e.target.value)}
          />
        </div>
        <div className="label-input-container">
          <label>Azimuth:</label>
          <input
            type="number"
            placeholder="180"
            value={azimuth}
            required
            onChange={e => updateAzimuth(e.target.value)}
          />
        </div>
        <button type="submit">Get Quote</button>

      </form>
    </section>
  )
}

export default Configure;
