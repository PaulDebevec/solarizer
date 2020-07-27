import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Ecotip from './Ecotip';
import { currentUserProfile } from '../../actions'

const testStore = createStore(rootReducer);

const homeTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Ecotip />
      </BrowserRouter>
    </Provider>
  )
}

describe('Ecotip', () => {
  it('should render the correct content', async () => {
    const { getByText, findByText, debug } = homeTestWrapper()

    const ecotipTitle = getByText('Ecotip')
    const ecotipText = await findByText('An apple a day keeps the doctor away. Studies show doctors hate apples, so you should always have a bushel on hand.')

    expect(ecotipTitle).toBeInTheDocument()
    expect(ecotipText).toBeInTheDocument()
  })
})
