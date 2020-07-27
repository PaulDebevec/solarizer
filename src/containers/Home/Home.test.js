import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Home from './Home';
import { currentUserProfile } from '../../actions'

const testStore = createStore(rootReducer);

const homeTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

describe('Home', () => {
  it('should render the correct content', () => {
    const { getAllByRole, getByAltText, getByText, getByLabelText, getByDisplayValue, debug } = homeTestWrapper()

    const allImages = getAllByRole('img')
    const sunImg = getByAltText('sun')
    const titlePart2 = getByText('larizer')
    const subtitle = getByText('Start Solarizing Now:')
    const addressLabel = getByText('Street Address')
    const addressInput = getByLabelText('Street Address')
    const cityLabel = getByText('City')
    const cityInput = getByLabelText('City')
    const stateInput = getByDisplayValue('Select State..')
    const zipCodeLabel = getByText('Zip Code')
    const zipCodeInput = getByLabelText('Zip Code')
    const beginButton = getByText('Begin')
    const faq = getByText('What is Solarizer?')

    expect(allImages).toHaveLength(1)
    expect(sunImg).toBeInTheDocument()
    expect(titlePart2).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(addressLabel).toBeInTheDocument()
    expect(addressInput).toBeInTheDocument()
    expect(cityLabel).toBeInTheDocument()
    expect(cityInput).toBeInTheDocument()
    expect(stateInput).toBeInTheDocument()
    expect(zipCodeLabel).toBeInTheDocument()
    expect(zipCodeInput).toBeInTheDocument()
    expect(beginButton).toBeInTheDocument()
    expect(faq).toBeInTheDocument()
  })

  it('should give an error message upon form submission if state is not selected', () => {
    const { getByLabelText, getByText, debug } = homeTestWrapper()

    const addressInput = getByLabelText('Street Address')
    const cityInput = getByLabelText('City')
    const zipCodeInput = getByLabelText('Zip Code')
    const beginButton = getByText('Begin')

    fireEvent.change(addressInput, { target: { value: '123 Test St' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(zipCodeInput, { target: { value: '80222' } })

    expect(addressInput.value).toBe('123 Test St')
    expect(cityInput.value).toBe('Denver')
    expect(zipCodeInput.value).toBe('80222')

    fireEvent.click(beginButton)

    const errMessage = getByText('Please select a state')

    expect(errMessage).toBeInTheDocument()
  })

  it('should give an error message upon form submission if zip code is not correct length', () => {
    const { getByLabelText, getByDisplayValue, getByText, debug } = homeTestWrapper()

    const addressInput = getByLabelText('Street Address')
    const cityInput = getByLabelText('City')
    const stateInput = getByDisplayValue('Select State..')
    const zipCodeInput = getByLabelText('Zip Code')
    const beginButton = getByText('Begin')

    fireEvent.change(addressInput, { target: { value: '123 Test St' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(zipCodeInput, { target: { value: '8022' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })

    fireEvent.click(beginButton)

    const errMessage = getByText('Zip code must be 5 digits')

    expect(errMessage).toBeInTheDocument()
  })
})
