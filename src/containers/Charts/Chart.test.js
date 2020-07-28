
import React from 'react';
import { render, fireEvent, getAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Chart from './Chart'
import { Bar, Line, Pie } from 'react-chartjs-2'
jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Line: () => null,
  Pie: () => null
}));


const testStore = createStore(rootReducer);

const chartTestWrapper = () => {
  const data = {
    ac_monthly: [521.8912353515625,
      564.6233520507812,
      737.8564453125,
      739.79345703125,
      829.3699951171875,
      847.98876953125,
      834.9229125976562,
      805.8444213867188,
      727.6734008789062,
      666.8536376953125,
      542.8961791992188,
      471.930419921875
    ],
    solrad_monthly: [5.084908962249756,
      6.171108722686768,
      7.394773483276367,
      7.778176307678223,
      8.63671875,
      9.294778823852539,
      8.980157852172852,
      8.637933731079102,
      7.904896259307861,
      6.774695873260498,
      15.589939594268799,
      14.561224937438965
    ],
    value_monthly: [57.668981506347656,
      62.39088040161133,
      81.53313720703125,
      81.74717700195312,
      91.64538446044922,
      93.70275903320312,
      92.25898184204101,
      89.04580856323243,
      80.40791079711914,
      73.68732696533203,
      159.99002780151367,
      152.14831140136719
    ],
    percent_offset: "50"
  }
  testStore.dispatch({ type: "SET_SOLAR_DATA", data })
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Chart />
        <Bar />
        <Line />
        <Pie />
      </BrowserRouter>
    </Provider>
  )
}


describe('Chart', () => {
  it('should render the correct content', () => {
    const { getByText } = chartTestWrapper()
    const bar = getByText('Bar')
    const line = getByText('Trend (Line)')
    const pie = getByText('Pie')
    const savingsMessage = getByText('Based on your annual energy usage, this solar system would offset 50.00% of your electicity cost per year!')

    expect(bar).toBeInTheDocument()
    expect(line).toBeInTheDocument()
    expect(pie).toBeInTheDocument()
    expect(savingsMessage).toBeInTheDocument()
    // debug()
  })

  it('should have different graph options available', () => {
    const { getByText, getAllByRole } = chartTestWrapper()

    const chartType = getByText('Chart Type')
    const solar = getByText('Solar Radiation')
    const ac = getByText('AC Monthly')
    const savings = getByText('Savings Value')
    const options = getAllByRole('option')


    expect(chartType).toBeInTheDocument()
    expect(solar).toBeInTheDocument()
    expect(ac).toBeInTheDocument()
    expect(savings).toBeInTheDocument()
    expect(options).toHaveLength(6)

  })
})
