import React, { useState } from 'react'
import './Historical.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom'

const Historical = ({ userProfile, userQuote, loadSolarData, history }) => {
  const [completedInputs, updateCompletedInputs] = useState(false)
  // const [january, updateJanuary] = useState(0)
  // const [february, updateFebruary] = useState(0)
  // const [march, updateMarch] = useState(0)
  // const [april, updateApril] = useState(0)
  // const [may, updateMay] = useState(0)
  // const [june, updateJune] = useState(0)
  // const [july, updateJuly] = useState(0)
  // const [august, updateAugust] = useState(0)
  // const [september, updateSeptember] = useState(0)
  // const [october, updateOctober] = useState(0)
  // const [november, updateNovember] = useState(0)
  // const [december, updateDecember] = useState(0)
  const [historicalData, updateHistoricalData] = useState(false)

  const [dataEntered, setDataEntered] = useState({january: ''})

  const changeValue = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: parseFloat(event.target.value) })
  }

  const submitClick = (e) => {
    updateHistoricalData(true)
  }

  const handleSubmit = (e) => {
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

    // const historical_kWh = {
    //   january,
    //   february,
    //   march,
    //   april,
    //   may,
    //   june,
    //   july,
    //   august,
    //   september,
    //   october,
    //   november,
    //   december
    // }

    fetch('https://solarizer-api.herokuapp.com/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        solarizer_parameters,
        // historical_kWh
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(data => {
        let object = { data, historicalData }
        loadSolarData(object)
      })
      .then(() => updateCompletedInputs(true))
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
                  // value={dataEntered.january}
                  name='january'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>February:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.february}
                  name='february'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>March:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.march}
                  name='march'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>April:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.april}
                  name='april'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>May:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.may}
                  name='may'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>June:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.june}
                  name='june'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
            </div>
            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>July:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.july}
                  name='july'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>August:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.august}
                  name='august'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>September:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.september}
                  name='september'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>October:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.october}
                  name='october'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>November:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.november}
                  name='november'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
              <div className='month-label-input'>
                <label>December:</label>
                <input type='number'
                  step='0.01'
                  // value={dataEntered.december}
                  name='december'
                  data-testid='historical-input'
                  // required
                  onChange={e => changeValue(e)} />
              </div>
            </div>
          </div>
          <div className='historical-buttons-container'>
            <button type='submit' onClick={submitClick} id="submit" className='historical-buttons'>Submit</button>
            <button type='submit' className='historical-buttons'>Skip</button>
          </div>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  userQuote: state.userQuote,
  history: state.solarData.historicalData
})

const mapDispatchToProps = (dispatch) => ({
  loadSolarData: (data) => dispatch(actions.loadSolarData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Historical);
