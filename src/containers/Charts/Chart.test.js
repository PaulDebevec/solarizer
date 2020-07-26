import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Chart from './Chart'
import { rootReducer } from '../../reducers/index'
import { BrowserRotuer } from 'react-router-dom'

afterEach(cleanup);

const testStore = createStore(rootReducer);

const chartTestWrapper = () => {
  return render(
    <Provider store={testStore }>
    <BrowserRouter>
    <Chart / >
    </BrowserRouter>
  </Provider>
  )
}


describe('Chart', () => {
  it('renders with redux', () => {
    const { getByTestId, getByText } = chartTestWrapper(<Chart />)

  })
})