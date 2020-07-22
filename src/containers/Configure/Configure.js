import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import './Configure.css';
import { connect } from 'react-redux'
import * as actions from '../../actions';

const Configure = ({ userQuote, allUserQuotes }) => {
  const [systemSize, updateSystemSize] = useState(null)
  const [moduleType, updateModuleType] = useState(null)
  const [arrayType, updateArrayType] = useState(null)
  const [systemLosses, updateSystemLosses] = useState(null)
  const [tilt, updateTilt] = useState(null)
  const [azimuth, updateAzimuth] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, updateError] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://developer.nrel.gov/api/pvwatts/v6.json?api_key=By8qOhq8GrFH18lkeImHNhinPb7jIbCbibKlQNsS&address=4521A S Crystal Way Aurora CO 80015&system_capacity=4&azimuth=180&tilt=20&array_type=0&module_type=0&losses=14')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(data => console.log(data.outputs))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (moduleType === null || arrayType === null) {
      return updateError('Please fill all Inputs')
    }
    const quote = {
      systemSize,
      moduleType,
      arrayType,
      systemLosses,
      tilt,
      azimuth,
      id: Date.now()
    }
    userQuote(quote)
    allUserQuotes(quote)
    updateFormCompleted(true)

  }

  return (
    <>
      {formCompleted && <Redirect push to="/historical" />}

      <section className="configure-container">
        <h2>Enter in the following information to get a quote!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
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
              required
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
              required
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
          <button type="submit">Get Quote</button>
          {/* <Link to="/">
        <button type="submit">Home</button>
        </Link> */}
        </form>
      </section>
    </>
  )
}


const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  userQuote: (quote) => dispatch(actions.userQuote(quote)),
  allUserQuotes: (userQuote) => dispatch(actions.allUserQuotes(userQuote))

})

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
