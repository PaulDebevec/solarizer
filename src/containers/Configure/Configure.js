import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import './Configure.css';
import { connect } from 'react-redux'
import * as actions from '../../actions';

const Configure = ({ userQuote, allUserQuotes, loadSolarData, quote }) => {
  const [systemSize, updateSystemSize] = useState('')
  const [moduleType, updateModuleType] = useState(undefined)
  const [arrayType, updateArrayType] = useState(undefined)
  const [systemLosses, updateSystemLosses] = useState('')
  const [tilt, updateTilt] = useState('')
  const [azimuth, updateAzimuth] = useState('')
  const [error, updateError] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (moduleType === undefined) {
      return updateError('Please select a module type')
    }
    if (arrayType === undefined) {
      return updateError('Please select an array type')
    }
    if (systemSize < 1 || systemSize > 10 || systemLosses < 0 || systemLosses > 20
      || tilt < 0 || tilt > 45 || azimuth < 0 || azimuth > 359) {
      return updateError('Please reverify inputs to be in acceptable range')
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
      {quote && <Redirect push to="/historical" />}
      <section className="configure-container">
        <div className="form-card">
          <div className="configure-form-container">
            <form className="configure-form" onSubmit={(e) => handleSubmit(e)}>
              <h3>Configure your array:</h3>
              {error && <p className="error">{error}</p>}
              <div className="configure-form-item">
                <label>System Size (kW) (1-10):
                  <input
                    type="number"
                    placeholder="4"
                    value={systemSize}
                    required
                    onChange={e => updateSystemSize(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <div className="configure-form-item">
                <label>Module Type:
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
                </label>
              </div>
              <div className="configure-form-item">
                <label>Array Type:
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
                </label>
              </div>
              <div className="configure-form-item">
                <label>System Losses (0-20%):
                  <input
                    type="number"
                    placeholder="14"
                    value={systemLosses}
                    required
                    onChange={e => updateSystemLosses(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <div className="configure-form-item">
                <label>Tilt (0-45 degrees):
                  <input
                    type="number"
                    placeholder="20"
                    value={tilt}
                    required
                    onChange={e => updateTilt(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <div className="configure-form-item">
                <label>Azimuth (0-359 degrees):
                  <input
                    type="number"
                    placeholder="180"
                    value={azimuth}
                    required
                    onChange={e => updateAzimuth(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <button className="form-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  quote: state.userQuote.id
})

const mapDispatchToProps = (dispatch) => ({
  userQuote: (quote) => dispatch(actions.userQuote(quote)),
  allUserQuotes: (userQuote) => dispatch(actions.allUserQuotes(userQuote)),
  loadSolarData: (data) => dispatch(actions.loadSolarData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
