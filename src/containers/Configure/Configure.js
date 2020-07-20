import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import './Configure.css';

const Configure = (props) => {
  const [systemSize, updateSystemSize] = useState(null)
  const [moduleType, updateModuleType] = useState(null)
  const [arrayType, updateArrayType] = useState(null)
  const [systemLosses, updateSystemLosses] = useState(null)
  const [tilt, updateTilt] = useState(null)
  const [azimuth, updateAzimuth] = useState(null)

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
            onChange={e => updateSystemSize(parseFloat(e.target.value))}
          />
        </div>
        <div className="label-input-container">
          <label>Module Type:</label>
          <select
            className="configure-selects"
            defaultValue={'DEFAULT'}
            onChange={e => updateModuleType(parseInt(e.target.value))}
          >
            <option value='DEFAULT' disabled>Select Module..</option>
            <option value={0}>Standard</option>
            <option value={1}>Premium</option>
            <option value={2}>Thin Film</option>
          </select>
        </div>
        <div className="label-input-container">
          <label>Array Type:</label>
          <select
            className="configure-selects"
            defaultValue={'DEFAULT'}
            onChange={e => updateArrayType(parseInt(e.target.value))}
          >
            <option value='DEFAULT' disabled>Select Array..</option>
            <option value={0}>Fixed (open rack)</option>
            <option value={1}>Fixed (roof mount)</option>
            <option value={2}>1-Axis Tracking</option>
            <option value={3}>1-Axis Backtracking</option>
            <option value={4}>2-Axis Tracking</option>
          </select>
        </div>
        <div className="label-input-container">
          <label>System Losses:</label>
          <input
            type="number"
            placeholder="14"
            value={systemLosses}
            required
            onChange={e => updateSystemLosses(parseFloat(e.target.value))}
          />
        </div>
        <div className="label-input-container">
          <label>Tilt:</label>
          <input
            type="number"
            placeholder="20"
            value={tilt}
            required
            onChange={e => updateTilt(parseFloat(e.target.value))}
          />
        </div>
        <div className="label-input-container">
          <label>Azimuth:</label>
          <input
            type="number"
            placeholder="180"
            value={azimuth}
            required
            onChange={e => updateAzimuth(parseFloat(e.target.value))}
          />
        </div>
      </form>
    </section>
  )
}

export default Configure;
