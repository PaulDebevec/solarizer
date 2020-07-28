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
    const { getByText } = appTestWrapper()
  })
})
