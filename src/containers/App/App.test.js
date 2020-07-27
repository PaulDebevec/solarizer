import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../reducers/index';
import App from './App'
import * as actions from '../../actions'

const testStore = createStore(rootReducer);

const appTestWrapper = () => {
  return render(
    <Provider store= {testStore}>
      <BrowserRouter>
        <App / >
      </BrowserRouter>
   </Provider>
  )
}

describe('example', () => {
  it('should render the correct content', () => {})
})
