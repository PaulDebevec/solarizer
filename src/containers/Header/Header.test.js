
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Header from './Header'


const testStore = createStore(rootReducer);

const headerTestWrapper = () => {
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
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

describe('Header', () => {
  it('should render the correct content', () => {
    const testStore = createStore(rootReducer);

    const header = () => {
      return render(
        <Provider store={testStore} >
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      )
    }
    const { getByText, getAllByRole, getByAltText } = header()
    const allImages = getAllByRole('img')
    const sunImg = getByAltText('sun')
    const titlePart1 = getByText('S')
    const titlePart2 = getByText('larizer')

    expect(allImages).toHaveLength(1)
    expect(sunImg).toBeInTheDocument()
    expect(titlePart1).toBeInTheDocument()
    expect(titlePart2).toBeInTheDocument()
  })

  it('should render more the results and charts link options when there is solar data in the global store', () => {

    const { getByText } = headerTestWrapper()

    const chart = getByText('Charts')
    const results = getByText('Results')
    expect(chart).toBeInTheDocument()
    expect(results).toBeInTheDocument()
  })

  it('should hide results/charts on click of new address', () => {

    const { getByText, debug, queryByText } = headerTestWrapper()

    const newAddress = getByText('New Address')
    const chart = getByText('Charts')
    const results = getByText('Results')
    expect(chart).toBeInTheDocument()
    expect(results).toBeInTheDocument()
    fireEvent.click(newAddress)
    expect(queryByText("Charts")).not.toBeInTheDocument()
    // debug()
  })

})
