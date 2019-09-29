import makeSelectCalculator, { makeSelectResult } from '../selectors';
import { initialState } from '../reducer';

describe('makeSelectCalculator', () => {
  it('should return initial state', () => {
    expect(makeSelectCalculator()({})).toEqual(initialState);
  });

  it('should select calculator state', () => {
    const calculatorState = {
      front: '1',
      operator: '+',
      back: '2',
    };
    const mockedState = {
      calculator: calculatorState,
    };
    expect(makeSelectCalculator()(mockedState)).toEqual(calculatorState);
  });

  it('should select result from calculator state', () => {
    const calculatorState = {
      front: '1',
      operator: '+',
      back: '2',
    };
    const mockedState = {
      calculator: calculatorState,
    };

    expect(makeSelectResult()(mockedState)).toEqual(`1+2`);
  });
});
