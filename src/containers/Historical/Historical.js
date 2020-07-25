import React, { useState } from 'react'
import './Historical.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom'

const Historical = ({ userProfile, userQuote, loadSolarData }) => {
  const [completedInputs, updateCompletedInputs] = useState(false)
  const [january, updateJanuary] = useState(undefined)
  const [february, updateFebruary] = useState(undefined)
  const [march, updateMarch] = useState(undefined)
  const [april, updateApril] = useState(undefined)
  const [may, updateMay] = useState(undefined)
  const [june, updateJune] = useState(undefined)
  const [july, updateJuly] = useState(undefined)
  const [august, updateAugust] = useState(undefined)
  const [september, updateSeptember] = useState(undefined)
  const [october, updateOctober] = useState(undefined)
  const [november, updateNovember] = useState(undefined)
  const [december, updateDecember] = useState(undefined)

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

    const historical_kWh = {
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december
    }

    console.log(solarizer_parameters)
    console.log(historical_kWh)

    fetch('https://solarizer-api.herokuapp.com/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          solarizer_parameters: solarizer_parameters
          // historical_kWh: historical_kWh
        })
      })

      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      // .then(data => console.log(data))
      .then(data => loadSolarData(data))
      .then(() => updateCompletedInputs(true))

  }

  return (
    <>
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
                  value={january}
                  // required
                  onChange={e => updateJanuary(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>February:</label>
                <input type='number'
                  step='0.01'
                  value={february}
                  // required
                  onChange={e => updateFebruary(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>March:</label>
                <input type='number'
                  step='0.01'
                  value={march}
                  // required
                  onChange={e => updateMarch(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>April:</label>
                <input type='number'
                  step='0.01'
                  value={april}
                  // required
                  onChange={e => updateApril(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>May:</label>
                <input type='number'
                  step='0.01'
                  value={may}
                  // required
                  onChange={e => updateMay(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>June:</label>
                <input type='number'
                  step='0.01'
                  value={june}
                  // required
                  onChange={e => updateJune(parseFloat(e.target.value))}/>
              </div>
            </div>

            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>July:</label>
                <input type='number'
                  step='0.01'
                  value={july}
                  // required
                  onChange={e => updateJuly(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>August:</label>
                <input type='number'
                  step='0.01'
                  value={august}
                  // required
                  onChange={e => updateAugust(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>September:</label>
                <input type='number'
                  step='0.01'
                  value={september}
                  // required
                  onChange={e => updateSeptember(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>October:</label>
                <input type='number'
                  step='0.01'
                  value={october}
                  // required
                  onChange={e => updateOctober(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>November:</label>
                <input type='number'
                  step='0.01'
                  value={november}
                  // required
                  onChange={e => updateNovember(parseFloat(e.target.value))}/>
              </div>
              <div className='month-label-input'>
                <label>December:</label>
                <input type='number'
                  step='0.01'
                  value={december}
                  // required
                  onChange={e => updateDecember(parseFloat(e.target.value))}/>
              </div>
            </div>
          </div>
          <div className='historical-buttons-container'>
            <button type='submit' className='historical-buttons'>
              Submit
          </button>
              <button type='submit' className='historical-buttons'>
                Skip
            </button>

          </div>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  userQuote: state.userQuote
})

const mapDispatchToProps = (dispatch) => ({
  // userQuote: (quote) => dispatch(actions.userQuote(quote)),
  // allUserQuotes: (userQuote) => dispatch(actions.allUserQuotes(userQuote)),
  loadSolarData: (data) => dispatch(actions.loadSolarData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Historical);

// export default Historical;
