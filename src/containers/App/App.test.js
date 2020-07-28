import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import App from './App'
import * as actions from '../../actions'

let data = {
  ac_monthly: [
    397.03,
    429.89,
    570.64,
    598.79,
    609.82,
    609.14,
    599.88,
    583.93,
    544.98,
    485.94,
    412.04,
    366.74
  ],
  solrad_monthly: [
    3.81,
    4.78,
    5.75,
    6.27,
    6.40,
    6.97,
    6.68,
    6.46,
    6.07,
    5.06,
    4.25,
    3.53
  ],
  value_monthly: [
    43.87,
    47.50,
    63.05,
    66.16,
    67.38,
    67.31,
    66.28,
    64.52,
    60.22,
    53.69,
    45.53,
    40.52
  ],
  percent_offset: 59,
}

let userQuote = {}

const testStore = createStore(rootReducer);

const appTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

describe('App', () => {
  it('should render the correct content on the starting page', () => {
    const { getAllByRole, getByAltText, getByText, getByLabelText, getByDisplayValue } = appTestWrapper()

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

    const ecotipTitle = getByText('Ecotip')

    expect(window.location.pathname).toBe('/')

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

    expect(ecotipTitle).toBeInTheDocument()
  })



})
