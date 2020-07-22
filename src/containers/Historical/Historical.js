import React from 'react'
import './Historical.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'

const Historical = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
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
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>February:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>March:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>April:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>May:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>June:</label>
                <input type='number' required />
              </div>
            </div>

            <div className='historical-inputs-column'>
              <div className='month-label-input'>
                <label>July:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>August:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>September:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>October:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>November:</label>
                <input type='number' required />
              </div>
              <div className='month-label-input'>
                <label>December:</label>
                <input type='number' required />
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

export default Historical;

