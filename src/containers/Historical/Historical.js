import React, { useState } from 'react'
import './Historical.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom'

const Historical = ({ userProfile, userQuote, loadSolarData, history }) => {
  const [completedInputs, updateCompletedInputs] = useState(false)
  const [dataEntered, setDataEntered] = useState({})

  const changeValue = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: parseFloat(event.target.value) })
  }

  const skipClick = (e) => {
    let resetData = { january: 'undefined', february: '', march: '', april: '', may: '', june: '', july: '', august: '', september: '', october: '', november: '', december: '' }
    handleSubmit(e, resetData)
  }

  const handleSubmit = (e, resetData) => {
    e.preventDefault()
    const splitAddress = userProfile.address.split(' ')
    splitAddress.push(userProfile.city, userProfile.state, userProfile.zipCode)

    const joinedAddress = splitAddress.join('+')

    const solarizer_parameters = {
      name: "example search",
      address: joinedAddress,
      system_capacity: userQuote.systemSize,
      azimuth: userQuote.azimuth,
      tilt: userQuote.tilt,
      array_type: userQuote.arrayType,
      module_type: userQuote.moduleType,
      losses: userQuote.systemLosses
    }
    var historical_kWh = {
      ...dataEntered
    }
    if (resetData) {
      historical_kWh = resetData
    }

    fetch('https://solarizer-api.herokuapp.com/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        solarizer_parameters,
        historical_kWh
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(data => {
        loadSolarData(data)
      })
      .then(() => updateCompletedInputs(true))
      .catch((error) => {
        window.alert(`Server Error. It's not your fault the error is: ${error}`)
      })
    }

  return (
    <>
      {history && <Redirect push to="/results" />}
      {completedInputs && <Redirect push to="/results" />}
      <div className='historical-container'>
        <form onSubmit={handleSubmit} className='historical-form'>
          <h1>Enter this location's historical energy usage (kWh):</h1>
          <h3><i>(OPTIONAL)</i></h3>
          <div className='input-columns-container'>
            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>January:</label>
                <input type='number'
                  step='0.01'
                  name='january'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>February:</label>
                <input type='number'
                  step='0.01'
                  name='february'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>March:</label>
                <input type='number'
                  step='0.01'
                  name='march'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>April:</label>
                <input type='number'
                  step='0.01'
                  name='april'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>May:</label>
                <input type='number'
                  step='0.01'
                  name='may'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>June:</label>
                <input type='number'
                  step='0.01'
                  name='june'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
            </div>
            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>July:</label>
                <input type='number'
                  step='0.01'
                  name='july'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>August:</label>
                <input type='number'
                  step='0.01'
                  name='august'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>September:</label>
                <input type='number'
                  step='0.01'
                  name='september'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>October:</label>
                <input type='number'
                  step='0.01'
                  name='october'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>November:</label>
                <input type='number'
                  step='0.01'
                  name='november'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>December:</label>
                <input type='number'
                  step='0.01'
                  name='december'
                  data-testid='historical-input'
                  required
                  onChange={e => changeValue(e)} />
              </div>
            </div>
          </div>
          <div className='historical-buttons-container'>
            <button type='submit' id="submit" className='historical-buttons'>Submit</button>
            <button type='button' onClick={(e) => skipClick(e)} className='historical-buttons'>Skip</button>
          </div>
        </form>
      </div>
    </>
  )
}


const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  userQuote: state.userQuote,
  history: state.solarData.percentOffset
})

const mapDispatchToProps = (dispatch) => ({
  loadSolarData: (data) => dispatch(actions.loadSolarData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Historical);
