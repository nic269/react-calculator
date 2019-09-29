/*
 *
 * Caculator actions
 *
 */

import {
  GET_RESULT,
  CLEAR_RESULT,
  DELETE_AG,
  UPDATE_FORMULA,
} from './constants';

export const getResult = () => ({
  type: GET_RESULT,
});

export const clearResult = () => ({
  type: CLEAR_RESULT,
});

export const deleteAg = () => ({
  type: DELETE_AG,
});

export const updateFormula = payload => ({
  type: UPDATE_FORMULA,
  payload,
});
