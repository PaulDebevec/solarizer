import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Faq from './Faq';

const testStore = createStore(rootReducer);

const data = [
  { faq: "Overview", answer: "Solarizer is a web app for solar energy enthusiasts seeking estimates on electricity production of a photovoltaic (PV) system based on a few simple inputs." },
  { faq: "Get Started", answer: "Users provide information about the system 's location, basic design parameters, and an optional historical monthly energy usage. Solarizer calculates estimates of the system 's annual and monthly electricity production, and an estimate of the value of that electricity." },
  { faq: "System Size", answer: "System Size is the DC (direct current) power rating of the PV array in kilowatts (kW) at standard test conditions. The default size if usually 4kW." }
]

const userProfile = {
  address: '123 street',
  city: 'Denver',
  state: 'CO',
  zipCode: '81117',
  validatedUser: true
}

testStore.dispatch({ type: "SET_SOLAR_FAQS", data })

const faqTestWrapper = () => {
  return render(
    < Provider store={testStore} >
      <BrowserRouter>
        <Faq />
      </BrowserRouter>
    </Provider >
  )
}

describe('Faq', () => {
  it('should render the correct content', () => {
    const { getByText } = faqTestWrapper()

    const faqTitle = getByText("Solarizer FAQ's")
    const faqHomeButton = getByText('Home')

    expect(faqTitle).toBeInTheDocument()
    expect(faqHomeButton).toBeInTheDocument()
  })

  it('should populate the page with questions and answers received from the redux store', () => {
    const { getByText } = faqTestWrapper()

    const faqTitle1 = getByText('Overview')
    const faqTitle2 = getByText('Get Started')
    const faqTitle3 = getByText('System Size')

    const response1 = getByText('Solarizer is a web app for solar energy enthusiasts seeking estimates on electricity production of a photovoltaic (PV) system based on a few simple inputs.')
    const response2 = getByText("Users provide information about the system 's location, basic design parameters, and an optional historical monthly energy usage. Solarizer calculates estimates of the system 's annual and monthly electricity production, and an estimate of the value of that electricity.")
    const response3 = getByText('System Size is the DC (direct current) power rating of the PV array in kilowatts (kW) at standard test conditions. The default size if usually 4kW.')

    expect(faqTitle1).toBeInTheDocument()
    expect(faqTitle2).toBeInTheDocument()
    expect(faqTitle3).toBeInTheDocument()

    expect(response1).toBeInTheDocument()
    expect(response2).toBeInTheDocument()
    expect(response3).toBeInTheDocument()
  })

  it('should not display the home button if the store contains a verified user', () => {
    testStore.dispatch({ type: "SET_CURRENT_PROFILE", userProfile })
    const { queryByText } = faqTestWrapper()

    const homeButton = queryByText('Home')

    expect(homeButton).not.toBeInTheDocument()
  })
})
