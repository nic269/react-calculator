/*
 *
 * Caculator actions
 *
 */

import { GET_RESULT, CLEAR_RESULT, UPDATE_FORMULA } from './constants';

export const getResult = () => ({
  type: GET_RESULT,
});

export const clearResult = () => ({
  type: CLEAR_RESULT,
});

export const updateFormula = payload => ({
  type: UPDATE_FORMULA,
  payload,
});
