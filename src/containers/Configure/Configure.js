import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import './Configure.css';
import { connect } from 'react-redux'
import * as actions from '../../actions';

const Configure = ({ userQuote, allUserQuotes, loadSolarData }) => {
  const [systemSize, updateSystemSize] = useState('')
  const [moduleType, updateModuleType] = useState(undefined)
  const [arrayType, updateArrayType] = useState(undefined)
  const [systemLosses, updateSystemLosses] = useState('')
  const [tilt, updateTilt] = useState('')
  const [azimuth, updateAzimuth] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  const [error, updateError] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)

  // useEffect(() => {
  //   // setIsLoading(true)
  //   fetch('https://developer.nrel.gov/api/pvwatts/v6.json?api_key=By8qOhq8GrFH18lkeImHNhinPb7jIbCbibKlQNsS&address=4521A S Crystal Way Aurora CO 80015&system_capacity=4&azimuth=180&tilt=20&array_type=0&module_type=0&losses=14')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch')
  //       }
  //       return response.json()
  //     })
  //     .then(data => loadSolarData(data))
  // }, [loadSolarData])

  const handleSubmit = e => {
    e.preventDefault()
    if (moduleType === undefined) {
      return updateError('Please select a module type')
    }
    if (arrayType === undefined) {
      return updateError('Please select an array type')
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
        <div className="form-card">
          <div className="configure-form-container">
            <form className="configure-form" onSubmit={(e) => handleSubmit(e)}>
              <h3>Configure your array:</h3>
              {error && <p className="error">{error}</p>}

              <div className="configure-form-item">
                <label>System Size (kW):</label>
                <input
                  type="number"
                  placeholder="4"
                  value={systemSize}
                  required
                  onChange={e => updateSystemSize(parseFloat(e.target.value))}
                />
              </div>

              <div className="configure-form-item">
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

              <div className="configure-form-item">
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

              <div className="configure-form-item">
                <label>System Losses:</label>
                <input
                  type="number"
                  placeholder="14"
                  value={systemLosses}
                  required
                  onChange={e => updateSystemLosses(parseFloat(e.target.value))}
                />
              </div>

              <div className="configure-form-item">
                <label>Tilt:</label>
                <input
                  type="number"
                  placeholder="20"
                  value={tilt}
                  required
                  onChange={e => updateTilt(parseFloat(e.target.value))}
                />
              </div>

              <div className="configure-form-item">
                <label>Azimuth:</label>
                <input
                  type="number"
                  placeholder="180"
                  value={azimuth}
                  required
                  onChange={e => updateAzimuth(parseFloat(e.target.value))}
                />
              </div>
              <button className="form-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
  userQuote: (quote) => dispatch(actions.userQuote(quote)),
  allUserQuotes: (userQuote) => dispatch(actions.allUserQuotes(userQuote)),
  loadSolarData: (data) => dispatch(actions.loadSolarData(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
