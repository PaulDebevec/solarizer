import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Home from './Home';
import Ecotip from '../Ecotip/Ecotip';
import { currentUserProfile } from '../../actions'

const testStore = createStore(rootReducer);

const homeTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Home />
        <Ecotip />
      </BrowserRouter>
    </Provider>
  )
}


describe('Home', () => {
  it('should render the correct content', () => {
    const { getByText, getByAltText, debug, getAllByRole } = homeTestWrapper()
    //queryBy returns null if not found instead of failing
    //findBy finds promises (combines getBy with waitFor)

    const allImages = getAllByRole('img')
    const sunImg = getByAltText('sun')
    const titlePart2 = getByText('larizer')
    const subtitle = getByText('Start Solarizing Now:')
    const addressLabel = getByText('Street Address')
    const city = getByText('City')
    const state = getByText('Select State..')
    const zip = getByText('Zip Code')
    const begin = getByText('Begin')
    const faq = getByText('What is Solarizer?')
    const ecotip = getByText('Ecotip')

    expect(allImages).toHaveLength(1)
    expect(sunImg).toBeInTheDocument()
    expect(titlePart2).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(addressLabel).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(zip).toBeInTheDocument()
    expect(begin).toBeInTheDocument()
    expect(faq).toBeInTheDocument()
    expect(ecotip).toBeInTheDocument()
  })

  it.skip('should ', () => {

  })

  it('should give an error message upon form submission if state is not selected', () => {
    // const mockSubmit = jest.fn()
    // jest.mock(currentUserProfile, () => jest.fn()
    //   .mockImplementationOnce(() => {
    //   return
    // }))

    // currentUserProfile.mockImplementation(mockSubmit)
    // handleSubmit.mockImplementation(mockSubmit)
    const { getByText, getByTitle, getByTestId, getByPlaceholderText, getByDisplayValue, getByLabelText, getByRole, debug } = homeTestWrapper()

    const addressInput = getByTestId('street-address')
    const cityInput = getByLabelText('City')
    const zipCodeInput = getByTitle('zip-code')
    const stateInput = getByDisplayValue('Select State..')

    expect(addressInput).toBeInTheDocument()
    expect(cityInput).toBeInTheDocument()
    expect(stateInput).toBeInTheDocument()

    const beginButton = getByText('Begin')

    fireEvent.change(addressInput, { target: { value: '123 test street' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(zipCodeInput, { target: { value: '80222' } })
    // fireEvent.change(stateInput, { target: { value: 'CO' } })

    expect(addressInput.value).toBe('123 test street')
    expect(cityInput.value).toBe('Denver')
    expect(zipCodeInput.value).toBe('80222')
    // expect(stateInput.value).toBe('CO')

    fireEvent.click(beginButton)

    const errMessage = getByText('Please select a state')

    expect(errMessage).toBeInTheDocument()

    // expect(handleSubmit()).toHaveBeenCalled()

  })

  it('should give an error message upon form submission if zip code is not correct length', () => {
    const { getByText, getByTitle, getByTestId, getByPlaceholderText, getByDisplayValue, getByLabelText, getByRole, debug } = homeTestWrapper()

    const addressInput = getByTestId('street-address')
    const cityInput = getByLabelText('City')
    const zipCodeInput = getByTitle('zip-code')
    const stateInput = getByDisplayValue('Select State..')
    const beginButton = getByText('Begin')

    fireEvent.change(addressInput, { target: { value: '123 test street' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(zipCodeInput, { target: { value: '802220' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })

    fireEvent.click(beginButton)

    const errMessage = getByText('Zip code must be 5 digits')

    expect(errMessage).toBeInTheDocument()
  })
})
