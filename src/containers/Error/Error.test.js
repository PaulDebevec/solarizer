import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Error from './Error';

const testStore = createStore(rootReducer);

const errorTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    </Provider>
  )
}

describe('Error', () => {
  it('should render the correct content', () => {
    const { getByText } = errorTestWrapper()

    const message = getByText('Oops! A Wrong Path was taken.')
    const button = getByText('Go Back to Home Page')

    expect(message).toBeInTheDocument()
    expect(button).toBeInTheDocument()

  })

  it('should navigate the user home on button click', () => {
    const { getByText } = errorTestWrapper()
    const button = getByText('Go Back to Home Page')

    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(window.location.href).toBe("http://localhost/");

  })
})
