import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Results from './Results';

const testStore = createStore(rootReducer)

let data = {
  data: {
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
  },
  historicalData: []
}

const resultsTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    </Provider>
  )
}

describe('Results', () => {
  it('should render the correct default content', () => {
    testStore.dispatch({ type: "SET_SOLAR_DATA", data })
    const { getByText } = resultsTestWrapper()

    const monthHeading = getByText('Month')
    const solradHeading = getByText('Solar Radiation')
    const acHeading = getByText('AC Energy')
    const valueHeading = getByText('Value')

    const solradSubheading = getByText('(kWh / m2 / day)')
    const acSubheading = getByText('(kWh)')
    const valueSubheading = getByText('($)')

    const graphButton = getByText('Graph It!')

    expect(monthHeading).toBeInTheDocument()
    expect(solradHeading).toBeInTheDocument()
    expect(acHeading).toBeInTheDocument()
    expect(valueHeading).toBeInTheDocument()

    expect(solradSubheading).toBeInTheDocument()
    expect(acSubheading).toBeInTheDocument()
    expect(valueSubheading).toBeInTheDocument()
    expect(graphButton).toBeInTheDocument()
  })

  it('should display a table with months and data points if user has successfully completed their quote', () => {
    testStore.dispatch({ type: "SET_SOLAR_DATA", data })
    const { getByText } = resultsTestWrapper()

    const JanuaryLabel = getByText('January')
    const FebruaryLabel = getByText('February')
    const MarchLabel = getByText('March')
    const AprilLabel = getByText('April')
    const MayLabel = getByText('May')
    const JuneLabel = getByText('June')
    const JulyLabel = getByText('July')
    const AugustLabel = getByText('August')
    const SeptemberLabel = getByText('September')
    const OctoberLabel = getByText('October')
    const NovemberLabel = getByText('November')
    const DecemberLabel = getByText('January')

    const acMonthlyData1 = getByText('397.03')
    const acMonthlyData2 = getByText('609.82')
    const acMonthlyData3 = getByText('366.74')
    const solradMonthlyData1 = getByText('3.81')
    const solradMonthlyData2 = getByText('6.40')
    const solradMonthlyData3 = getByText('3.53')
    const valueMonthlyData1 = getByText('43.87')
    const valueMonthlyData2 = getByText('67.31')
    const valueMonthlyData3 = getByText('40.52')

    expect(JanuaryLabel).toBeInTheDocument()
    expect(FebruaryLabel).toBeInTheDocument()
    expect(MarchLabel).toBeInTheDocument()
    expect(AprilLabel).toBeInTheDocument()
    expect(MayLabel).toBeInTheDocument()
    expect(JuneLabel).toBeInTheDocument()
    expect(JulyLabel).toBeInTheDocument()
    expect(AugustLabel).toBeInTheDocument()
    expect(SeptemberLabel).toBeInTheDocument()
    expect(OctoberLabel).toBeInTheDocument()
    expect(NovemberLabel).toBeInTheDocument()
    expect(DecemberLabel).toBeInTheDocument()

    expect(acMonthlyData1).toBeInTheDocument()
    expect(acMonthlyData2).toBeInTheDocument()
    expect(acMonthlyData3).toBeInTheDocument()
    expect(solradMonthlyData1).toBeInTheDocument()
    expect(solradMonthlyData2).toBeInTheDocument()
    expect(solradMonthlyData3).toBeInTheDocument()
    expect(valueMonthlyData1).toBeInTheDocument()
    expect(valueMonthlyData2).toBeInTheDocument()
    expect(valueMonthlyData3).toBeInTheDocument()
  })

  it('should display a percentage offset notice for the user if they have entered historical data', () => {
    testStore.dispatch({ type: "SET_SOLAR_DATA", data })

    const { getByText } = resultsTestWrapper()

    const offsetNotice = getByText('Based on your annual energy usage, this solar system would offset 59 % per year!')
    expect(offsetNotice).toBeInTheDocument()
  })

  it("should display a different notice to advise them how to recieve true savings estimate if they haven't entered historical data", () => {
    data = {
      data: {
        ac_monthly: [],
        solrad_monthly: [],
        value_monthly: [],
        percent_offset: ''
      },
      historicalData: []
    }

    testStore.dispatch({ type: "SET_SOLAR_DATA", data })
    const { getByText } = resultsTestWrapper()

    const alternateOffsetMessage = getByText('For a true savings estimate, please enter your')
    const alternateOffsetMessageLink = getByText('home energy data')

    expect(alternateOffsetMessage).toBeInTheDocument()
    expect(alternateOffsetMessageLink).toBeInTheDocument()
  })

  it('should not display the loading data message if the user has data available for display', () => {
    testStore.dispatch({ type: "SET_SOLAR_DATA", data })
    const { queryByText } = resultsTestWrapper()

    const loadingMessage = queryByText('Loading Solar Data....')
    expect(loadingMessage).not.toBeInTheDocument()
  })
})