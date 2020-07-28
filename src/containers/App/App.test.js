import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import App from './App'
import { Bar, Line, Pie } from 'react-chartjs-2'
jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Line: () => null,
  Pie: () => null
}));


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

  it('should not render a header on the homepage', () => {
    const { queryAllByRole, queryByAltText, queryByText } = appTestWrapper()

    const allImages = queryAllByRole('img')
    const sunImg = queryByAltText('sun')
    const titlePart1 = queryByText('S')
    const titlePart2 = queryByText('larizer')

    expect(allImages).not.toBeInTheDocument
    expect(sunImg).not.toBeInTheDocument
    expect(titlePart1).not.toBeInTheDocument
    expect(titlePart2).not.toBeInTheDocument
  })

  it('should render a header and the configure page once the user fills out and submits the first form', () => {
    const { getAllByRole, getByAltText, getByText, getByLabelText, getByDisplayValue } = appTestWrapper()

    const addressInput = getByLabelText('Street Address')
    const cityInput = getByLabelText('City')
    const stateInput = getByDisplayValue('Select State..')
    const zipCodeInput = getByLabelText('Zip Code')
    const beginButton = getByText('Begin')
    fireEvent.change(addressInput, { target: { value: '123 Test St' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput, { target: { value: '80222' } })
    fireEvent.click(beginButton)

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

    const allImages = getAllByRole('img')
    const sunImg = getByAltText('sun')
    const titlePart1 = getByText('S')
    const titlePart2 = getByText('larizer')

    const ecotipTitle = getByText('Ecotip')

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

    expect(allImages).toHaveLength(1)
    expect(sunImg).toBeInTheDocument()
    expect(titlePart1).toBeInTheDocument()
    expect(titlePart2).toBeInTheDocument()

    expect(ecotipTitle).toBeInTheDocument()

    expect(window.location.pathname).toBe('/configure')
  })

  it('after completing and successfully submitting the configure form, bring the user to the historical page with its rendered content', () => {
    const { getByText, getByLabelText } = appTestWrapper()

    const sizeInput = getByLabelText('System Size (kW) (1-10):')
    const moduleTypeInput = getByLabelText('Module Type:')
    const arrayTypeInput = getByLabelText('Array Type:')
    const systemLossesInput = getByLabelText('System Losses (0-20%):')
    const tiltInput = getByLabelText('Tilt (0-45 degrees):')
    const azimuthInput = getByLabelText('Azimuth (0-359 degrees):')
    const configureSubmit = getByText('Submit')
    fireEvent.change(sizeInput, { target: { value: 4 } })
    fireEvent.change(moduleTypeInput, { target: { value: 0 } })
    fireEvent.change(arrayTypeInput, { target: { value: 0 } })
    fireEvent.change(systemLossesInput, { target: { value: 20 } })
    fireEvent.change(tiltInput, { target: { value: 20 } })
    fireEvent.change(azimuthInput, { target: { value: 180 } })
    fireEvent.click(configureSubmit)

    const historicalTitle = getByText("Enter this location's historical energy usage (kWh):")
    const historicalSubtitle = getByText('(OPTIONAL)')
    const JanuaryLabel = getByText('January:')
    const FebruaryLabel = getByText('February:')
    const MarchLabel = getByText('March:')
    const AprilLabel = getByText('April:')
    const MayLabel = getByText('May:')
    const JuneLabel = getByText('June:')
    const JulyLabel = getByText('July:')
    const AugustLabel = getByText('August:')
    const SeptemberLabel = getByText('September:')
    const OctoberLabel = getByText('October:')
    const NovemberLabel = getByText('November:')
    const DecemberLabel = getByText('December:')
    const submitButton = getByText('Submit')
    const skipButton = getByText('Skip')

    expect(historicalTitle).toBeInTheDocument()
    expect(historicalSubtitle).toBeInTheDocument()
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
    expect(submitButton).toBeInTheDocument()
    expect(skipButton).toBeInTheDocument()

    expect(window.location.pathname).toBe('/historical')
  })

  it('should allow the user to skip the historical page and bring up a results page with a table created from their configure data', () => {
    testStore.dispatch({ type: "SET_SOLAR_DATA", data })
    const { getByText } = appTestWrapper()

    expect(window.location.pathname).toBe('/results')

    const monthHeading = getByText('Month')
    const solradHeading = getByText('Solar Radiation')
    const acHeading = getByText('AC Energy')
    const valueHeading = getByText('Value')
    const solradSubheading = getByText('(kWh / m2 / day)')
    const acSubheading = getByText('(kWh)')
    const valueSubheading = getByText('($)')
    const graphButton = getByText('Graph It!')
    const JanuaryLabel = getByText('January')
    const FebruaryLabel = getByText('February')
    const MarchLabel = getByText('March')
    const acMonthlyData1 = getByText('397.03')
    const acMonthlyData2 = getByText('609.82')
    const solradMonthlyData1 = getByText('3.81')
    const solradMonthlyData2 = getByText('6.40')
    const valueMonthlyData1 = getByText('43.87')
    const valueMonthlyData2 = getByText('67.31')
    const offsetNotice = getByText('Based on your annual energy usage, this solar system would offset 59.00% of your electicity cost per year!')

    expect(monthHeading).toBeInTheDocument()
    expect(solradHeading).toBeInTheDocument()
    expect(acHeading).toBeInTheDocument()
    expect(valueHeading).toBeInTheDocument()
    expect(solradSubheading).toBeInTheDocument()
    expect(acSubheading).toBeInTheDocument()
    expect(valueSubheading).toBeInTheDocument()
    expect(graphButton).toBeInTheDocument()
    expect(JanuaryLabel).toBeInTheDocument()
    expect(FebruaryLabel).toBeInTheDocument()
    expect(MarchLabel).toBeInTheDocument()
    expect(acMonthlyData1).toBeInTheDocument()
    expect(acMonthlyData2).toBeInTheDocument()
    expect(solradMonthlyData1).toBeInTheDocument()
    expect(solradMonthlyData2).toBeInTheDocument()
    expect(valueMonthlyData1).toBeInTheDocument()
    expect(valueMonthlyData2).toBeInTheDocument()
    expect(offsetNotice).toBeInTheDocument()
  })

  it('should now have a results, charts, and new address button available to the user in the header', () => {
    const { getByText } = appTestWrapper()

    const newAddress = getByText('New Address')
    const chart = getByText('Charts')
    const results = getByText('Results')
    expect(newAddress).toBeInTheDocument()
    expect(chart).toBeInTheDocument()
    expect(results).toBeInTheDocument()
  })

  it('after clicking the graph it button, bring the user to a page where their results are presented on a graph with dropdowns to select chart type, and what data to use', () => {
    const { getByText } = appTestWrapper()

    const graphButton = getByText('Graph It!')
    fireEvent.click(graphButton)

    expect(window.location.pathname).toBe('/chart')

    const bar = getByText('Bar')
    const line = getByText('Trend (Line)')
    const pie = getByText('Pie')
    const savingsMessage = getByText('Based on your annual energy usage, this solar system would offset 59.00% of your electicity cost per year!')

    expect(bar).toBeInTheDocument()
    expect(line).toBeInTheDocument()
    expect(pie).toBeInTheDocument()
    expect(savingsMessage).toBeInTheDocument()
  })

  it('should allow the user to click the newAddress button in the header, after which they will be brought back to the homepage where they will be able to start over and the header is no longer there', () => {
    const { getByText, queryByText } = appTestWrapper()

    const newAddressButton = getByText('New Address')
    fireEvent.click(newAddressButton)

    expect(window.location.pathname).toBe('/')

    const newAddress = queryByText('New Address')
    const chart = queryByText('Charts')
    const results = queryByText('Results')

    expect(newAddress).not.toBeInTheDocument()
    expect(chart).not.toBeInTheDocument()
    expect(results).not.toBeInTheDocument()

    const homepageSubtitle = getByText('Start Solarizing Now:')
    const addressInputLabel = getByText('Street Address')
    const homepageBeginButton = getByText('Begin')

    expect(homepageSubtitle).toBeInTheDocument()
    expect(addressInputLabel).toBeInTheDocument()
    expect(homepageBeginButton).toBeInTheDocument()
  })
})
