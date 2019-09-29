import { getResult, clearResult, updateFormula } from '../actions';
import { GET_RESULT, CLEAR_RESULT, UPDATE_FORMULA } from '../constants';

describe('Caculator actions', () => {
  describe('getResult Action', () => {
    it('has a type of GET_RESULT', () => {
      const expected = {
        type: GET_RESULT,
      };
      expect(getResult()).toEqual(expected);
    });
  });

  describe('clearResult Action', () => {
    it('has a type of CLEAR_RESULT', () => {
      const expected = {
        type: CLEAR_RESULT,
      };
      expect(clearResult()).toEqual(expected);
    });
  });

  describe('updateFormula Action', () => {
    it('has a type of UPDATE_FORMULA', () => {
      const payload = {
        value: '13',
        group: 'number',
      };
      const expected = {
        type: UPDATE_FORMULA,
        payload,
      };
      expect(updateFormula(payload)).toEqual(expected);
    });
  });
});
