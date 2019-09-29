import produce from 'immer';
import caculatorReducer, { initialState } from '../reducer';
import { getResult, clearResult, deleteAg, updateFormula } from '../actions';
import { NUMBER_GROUP, OPERATOR_GROUP } from '../constants';

/* eslint-disable default-case, no-param-reassign */
describe('caculatorReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(caculatorReducer(undefined, {})).toEqual(expectedResult);
  });

  describe('getResult', () => {
    it('should handle getResult action with all initial state values', () => {
      const expectedResult = produce(state, draft => {
        draft.front = '0';
        draft.back = initialState.back;
        draft.operator = initialState.operator;
      });

      expect(caculatorReducer(state, getResult())).toEqual(expectedResult);
    });

    it('should handle getResult action with updated front', () => {
      const ownState = {
        ...state,
        front: '5',
      };
      const expectedResult = produce(state, draft => {
        draft.front = '5';
        draft.back = initialState.back;
        draft.operator = initialState.operator;
      });

      expect(caculatorReducer(ownState, getResult())).toEqual(expectedResult);
    });

    it('should handle getResult action with updated front, operator and without back value', () => {
      const ownState = {
        ...state,
        front: '5',
        operator: '+',
      };
      const expectedResult = produce(state, draft => {
        draft.front = '10';
        draft.back = initialState.back;
        draft.operator = initialState.operator;
      });

      expect(caculatorReducer(ownState, getResult())).toEqual(expectedResult);
    });

    it('should handle getResult action with updated front, operator and back', () => {
      const ownState = {
        front: '5',
        operator: '+',
        back: '3',
      };
      const expectedResult = produce(state, draft => {
        draft.front = '8';
        draft.back = initialState.back;
        draft.operator = initialState.operator;
      });

      expect(caculatorReducer(ownState, getResult())).toEqual(expectedResult);
    });
  });

  describe('clearResult', () => {
    it('shoudl handle clearResult action', () => {
      const ownState = {
        front: '5',
        operator: '+',
        back: '3',
      };

      expect(caculatorReducer(ownState, clearResult())).toEqual(state);
    });
  });

  describe('deleteAg', () => {
    it('shoudl handle deleteAg action', () => {
      const ownState = {
        front: '5',
        operator: '+',
        back: '34',
      };
      const expectedResult1 = {
        ...ownState,
        back: '3',
      };
      const expectedResult2 = {
        ...ownState,
        back: '',
      };
      const expectedResult3 = {
        ...ownState,
        back: '',
        operator: '',
      };
      const expectedResult4 = {
        front: initialState.front,
        operator: '',
        back: '',
      };

      expect(caculatorReducer(ownState, deleteAg())).toEqual(expectedResult1);
      expect(caculatorReducer(expectedResult1, deleteAg())).toEqual(
        expectedResult2,
      );
      expect(caculatorReducer(expectedResult2, deleteAg())).toEqual(
        expectedResult3,
      );
      expect(caculatorReducer(expectedResult3, deleteAg())).toEqual(
        expectedResult4,
      );
    });
  });

  describe('updateFormula', () => {
    it('should handle updateFormula with number group', () => {
      const expectedResult1 = produce(state, draft => {
        draft.front = state.front;
      });
      const expectedResult2 = produce({ ...state, front: '1' }, draft => {
        draft.front = '13';
      });
      const expectedResult3 = produce({ ...state, operator: '+' }, draft => {
        draft.back = '4';
      });

      expect(
        caculatorReducer(
          state,
          updateFormula({ value: '0', group: NUMBER_GROUP }),
        ),
      ).toEqual(expectedResult1);

      expect(
        caculatorReducer(
          { ...state, front: '1' },
          updateFormula({ value: '3', group: NUMBER_GROUP }),
        ),
      ).toEqual(expectedResult2);

      expect(
        caculatorReducer(
          { ...state, operator: '+' },
          updateFormula({ value: '4', group: NUMBER_GROUP }),
        ),
      ).toEqual(expectedResult3);
    });

    it('should handle updateFormula with operator group', () => {
      const expectedResult1 = produce(state, draft => {
        draft.operator = '*';
      });
      const expectedResult2 = produce({ ...state, operator: '*' }, draft => {
        draft.operator = '/';
      });
      const expectedResult3 = produce(
        { front: '10', operator: '-', back: '5' },
        draft => {
          draft.front = '5';
          draft.back = initialState.back;
          draft.operator = '/';
        },
      );
      const expectedResult4 = produce(
        { front: '5', operator: '/', back: '2' },
        draft => {
          draft.front = '2.5';
          draft.back = initialState.back;
          draft.operator = '+';
        },
      );
      const expectedResult5 = produce(
        { front: '5', operator: '*', back: '2' },
        draft => {
          draft.front = '10';
          draft.back = initialState.back;
          draft.operator = '-';
        },
      );

      expect(
        caculatorReducer(
          state,
          updateFormula({ value: '*', group: OPERATOR_GROUP }),
        ),
      ).toEqual(expectedResult1);

      expect(
        caculatorReducer(
          { ...state, operator: '*' },
          updateFormula({ value: '/', group: OPERATOR_GROUP }),
        ),
      ).toEqual(expectedResult2);

      expect(
        caculatorReducer(
          { front: '10', operator: '-', back: '5' },
          updateFormula({ value: '/', group: OPERATOR_GROUP }),
        ),
      ).toEqual(expectedResult3);

      expect(
        caculatorReducer(
          { front: '5', operator: '/', back: '2' },
          updateFormula({ value: '+', group: OPERATOR_GROUP }),
        ),
      ).toEqual(expectedResult4);

      expect(
        caculatorReducer(
          { front: '5', operator: '*', back: '2' },
          updateFormula({ value: '-', group: OPERATOR_GROUP }),
        ),
      ).toEqual(expectedResult5);
    });
  });
});
