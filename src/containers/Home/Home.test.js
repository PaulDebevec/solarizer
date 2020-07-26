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
    const { getByText, getByPlaceholderText, debug } = homeTestWrapper()


    const addressLabel = getByText('Street Address')


    expect(addressLabel).toBeInTheDocument()
  })

  it('should ', () => {

  })

  it.skip('should call the handleSubmit function on the click of the Begin button', () => {
    // const mockSubmit = jest.fn()
    // jest.mock(currentUserProfile, () => jest.fn()
    //   .mockImplementationOnce(() => {
    //   return
    // }))

    // currentUserProfile.mockImplementation(mockSubmit)
    // handleSubmit.mockImplementation(mockSubmit)
    const { getByText, getByPlaceholderText, getByDisplayValue, getByLabelText, getByRole, debug } = homeTestWrapper()

    const addressInput = getByRole('address')
    const cityInput = getByRole('city')
    const zipCodeInput = getByRole('zipCode')
    const stateInput = getByDisplayValue('Select State..')

    expect(addressInput).toBeInTheDocument()
    expect(cityInput).toBeInTheDocument()
    expect(stateInput).toBeInTheDocument()

    const beginButton = getByText('Begin')

    fireEvent.change(addressInput, { target: { value: '123 test street' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(zipCodeInput, { target: { value: '80222' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })

    expect(addressInput.value).toBe('123 test street')
    expect(cityInput.value).toBe('Denver')
    expect(zipCodeInput.value).toBe('80222')
    // expect(stateInput.value).toBe('CO')

    fireEvent.click(beginButton)

    const errMessage = getByText('Please select a state')

    expect(errMessage).toBeInTheDocument()

    // expect(handleSubmit()).toHaveBeenCalled()

  })


})
