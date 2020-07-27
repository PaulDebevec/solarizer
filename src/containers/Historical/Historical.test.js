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
    const { getByText } = historicalTestWrapper()

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

  it('should have two buttons and twelve text inputs', () => {
    const { getAllByTestId, getAllByRole } = historicalTestWrapper()

    const historicalButtons = getAllByRole('button')
    const historicalInputs = getAllByTestId('historical-input')

    expect(historicalButtons).toHaveLength(2)
    expect(historicalInputs).toHaveLength(12)
  })

  it('should be able to update the state of all inputs', () => {
    const { getAllByTestId, getAllByRole } = historicalTestWrapper()

    const historicalInputs = getAllByTestId('historical-input')

    fireEvent.change(historicalInputs[0], { target: { value: 12 } })
    fireEvent.change(historicalInputs[1], { target: { value: 11 } })
    fireEvent.change(historicalInputs[2], { target: { value: 22 } })
    fireEvent.change(historicalInputs[3], { target: { value: 33 } })
    fireEvent.change(historicalInputs[4], { target: { value: 44 } })
    fireEvent.change(historicalInputs[5], { target: { value: 55 } })
    fireEvent.change(historicalInputs[6], { target: { value: 66 } })
    fireEvent.change(historicalInputs[7], { target: { value: 77 } })
    fireEvent.change(historicalInputs[8], { target: { value: 88 } })
    fireEvent.change(historicalInputs[9], { target: { value: 99 } })
    fireEvent.change(historicalInputs[10], { target: { value: 100 } })
    fireEvent.change(historicalInputs[11], { target: { value: 111 } })

    expect(historicalInputs[0].value).toBe("12")
    expect(historicalInputs[1].value).toBe("11")
    expect(historicalInputs[2].value).toBe("22")
    expect(historicalInputs[3].value).toBe("33")
    expect(historicalInputs[4].value).toBe("44")
    expect(historicalInputs[5].value).toBe("55")
    expect(historicalInputs[6].value).toBe("66")
    expect(historicalInputs[7].value).toBe("77")
    expect(historicalInputs[8].value).toBe("88")
    expect(historicalInputs[9].value).toBe("99")
    expect(historicalInputs[10].value).toBe("100")
    expect(historicalInputs[11].value).toBe("111")
  })

})
