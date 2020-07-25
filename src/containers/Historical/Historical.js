import React from 'react'
import './Historical.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'

const Historical = ({ userProfile, userQuote, loadSolarData }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const splitAddress = userProfile.address.split(' ')
    splitAddress.push(userProfile.city, userProfile.state, userProfile.zipCode)

    const joinedAddress = splitAddress.join('+')

    const fetch_object = {
      name: "example search",
      address: joinedAddress,
      system_capacity: userQuote.systemSize,
      azimuth: userQuote.azimuth,
      tilt: userQuote.tilt,
      array_type: userQuote.arrayType,
      module_type: userQuote.moduleType,
      losses: userQuote.systemLosses
    }

    console.log(fetch_object)

    fetch('https://solarizer-api.herokuapp.com/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          solarizer_parameters: fetch_object
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
  }

  return (
    <>
      <div className='historical-container'>
        <form onSubmit={handleSubmit} className='historical-form'>
          <h1>Enter this location's historical energy usage (kWh):</h1>
          <h3><i>(OPTIONAL)</i></h3>
          <div className='input-columns-container'>
            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>January:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>February:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>March:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>April:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>May:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>June:</label>
                <input type='number'/>
              </div>
            </div>

            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>July:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>August:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>September:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>October:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>November:</label>
                <input type='number'/>
              </div>
              <div className='month-label-input'>
                <label>December:</label>
                <input type='number'/>
              </div>
            </div>
          </div>
          <div className='historical-buttons-container'>
            <button type='submit' className='historical-buttons'>
              Submit
          </button>
            <Link to='/results'>
              <button className='historical-buttons'>
                Skip
            </button>
            </Link>
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
