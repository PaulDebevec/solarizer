import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import Historical from './Historical';

const testStore = createStore(rootReducer)

const historicalTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Historical />
      </BrowserRouter>
    </Provider>
  )
}

describe('Historical', () => {
  it('should render the correct content', () => {
    const { getByText, getByAltText, getByTestId } = historicalTestWrapper()

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
  })


})
