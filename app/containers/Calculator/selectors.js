import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calculator state domain
 */

const selectCalculatorDomain = state => state.calculator || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Calculator
 */

export const makeSelectCalculator = () =>
  createSelector(
    selectCalculatorDomain,
    substate => substate,
  );

export const makeSelectResult = () =>
  createSelector(
    selectCalculatorDomain,
    ({ front, operator, back }) => `${front}${operator}${back}`,
  );

export default makeSelectCalculator;
