import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import './Configure.css';

const Configure = (props) => {
  const [systemSize, updateSystemSize] = useState('')
  const [moduleType, updateModuleType] = useState('')
  const [arrayType, updateArrayType] = useState('')
  const [systemLosses, updateSystemLosses] = useState('')
  const [tilt, updateTilt] = useState('')
  const [azimuth, updateAzimuth] = useState('')

  return (
    <section className="configure-container">
      <h2>Enter in the following information to get a quote!</h2>
      <form>
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
            onChange={e => updateModuleType(e.target.value)}
          >
            <option>Select..</option>
            <option>Standard</option>
            <option>Premium</option>
            <option>Thin Film</option>
          </select>
        </div>
        <div className="label-input-container">
          <label>Array Type:</label>
          <select
            className="configure-selects"
            onChange={e => updateArrayType(e.target.value)}
          >
            <option>Select..</option>
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
      </form>
    </section>
  )
}

export default Configure;
