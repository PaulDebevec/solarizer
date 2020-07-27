import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Configure from './Configure';
import { currentUserProfile } from '../../actions'

const testStore = createStore(rootReducer);

const configureTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Configure />
      </BrowserRouter>
    </Provider>
  )
}

describe('Configure', () => {
  it('should render the correct content', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const title = getByText('Configure your array:')
    const sizeLabel = getByText('System Size (kW) (1-10):')
    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeLabel = getByText('Module Type:')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeLabel = getByText('Array Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesLabel = getByText('System Losses (0-20%):')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltLabel = getByText('Tilt (0-45 degrees):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthLabel = getByText('Azimuth (0-359 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    expect(title).toBeInTheDocument()
    expect(sizeLabel).toBeInTheDocument()
    expect(sizeInput).toBeInTheDocument()
    expect(moduleTypeLabel).toBeInTheDocument()
    expect(moduleTypeInput).toBeInTheDocument()
    expect(arrayTypeLabel).toBeInTheDocument()
    expect(arrayTypeInput).toBeInTheDocument()
    expect(systemLossesLabel).toBeInTheDocument()
    expect(systemLossesInput).toBeInTheDocument()
    expect(tiltLabel).toBeInTheDocument()
    expect(tiltInput).toBeInTheDocument()
    expect(azimuthLabel).toBeInTheDocument()
    expect(azimuthInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('should give an error message upon form submission if system size field is left blank', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    // fireEvent.change(sizeInput, { target: { value: 4 } })
    fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 14 } })
    fireEvent.change(tiltInput, { target: { value: 20 } })
    fireEvent.change(azimuthInput, { target: { value: 180 } })
    fireEvent.click(submitButton)

    const errMessage = getByText('Please reverify inputs to be in acceptable range')

    expect(errMessage).toBeInTheDocument()
  })

  it('should give an error message upon form submission if module type field is left blank', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    fireEvent.change(sizeInput, { target: { value: 4 } })
    // fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 14 } })
    fireEvent.change(tiltInput, { target: { value: 20 } })
    fireEvent.change(azimuthInput, { target: { value: 180 } })
    fireEvent.click(submitButton)

    const errMessage = getByText('Please select a module type')

    expect(errMessage).toBeInTheDocument()
  })

  it('should give an error message upon form submission if array type field is left blank', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    fireEvent.change(sizeInput, { target: { value: 4 } })
    fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    // fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 14 } })
    fireEvent.change(tiltInput, { target: { value: 20 } })
    fireEvent.change(azimuthInput, { target: { value: 180 } })
    fireEvent.click(submitButton)

    const errMessage = getByText('Please select an array type')

    expect(errMessage).toBeInTheDocument()
  })

  it('should give an error message upon form submission if system losses field is out of range', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    fireEvent.change(sizeInput, { target: { value: 4 } })
    fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 100 } })
    fireEvent.change(tiltInput, { target: { value: 20 } })
    fireEvent.change(azimuthInput, { target: { value: 180 } })
    fireEvent.click(submitButton)

    const errMessage = getByText('Please reverify inputs to be in acceptable range')

    expect(errMessage).toBeInTheDocument()
  })

  it('should give an error message upon form submission if tilt field is out of range', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    fireEvent.change(sizeInput, { target: { value: 4 } })
    fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 14 } })
    fireEvent.change(tiltInput, { target: { value: 100 } })
    fireEvent.change(azimuthInput, { target: { value: 180 } })
    fireEvent.click(submitButton)

    const errMessage = getByText('Please reverify inputs to be in acceptable range')

    expect(errMessage).toBeInTheDocument()
  })

  it.skip('should give an error message upon form submission if azimuth field is out of range', () => {
    const { getByText, getByLabelText, debug } = configureTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const submitButton = getByText('Submit')

    fireEvent.change(sizeInput, { target: { value: 4 } })
    fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 14 } })
    fireEvent.change(tiltInput, { target: { value: 20 } })
    fireEvent.change(azimuthInput, { target: { value: 375 } })
    fireEvent.click(submitButton)

    const errMessage = getByText('Please reverify inputs to be in acceptable range')

    expect(errMessage).toBeInTheDocument()
  })
})
