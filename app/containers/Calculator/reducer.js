/*
 *
 * Calculator reducer
 *
 */
import produce from 'immer';
import {
  GET_RESULT,
  CLEAR_RESULT,
  DELETE_AG,
  UPDATE_FORMULA,
  NUMBER_GROUP,
  OPERATOR_GROUP,
  ADD_KEY,
  SUB_KEY,
  MUL_KEY,
  DIV_KEY,
} from './constants';

const calculate = (front, operator, back) => {
  const frontVal = parseFloat(front);
  const backVal = parseFloat(back);
  let result;
  switch (operator) {
    case ADD_KEY:
      result = frontVal + backVal;
      break;
    case SUB_KEY:
      result = frontVal - backVal;
      break;
    case MUL_KEY:
      result = frontVal * backVal;
      break;
    case DIV_KEY:
      result = frontVal / backVal;
      break;
    default:
      result = front;
      break;
  }

  return result.toString();
};

export const initialState = {
  front: '0',
  back: '',
  operator: '',
};

/* eslint-disable default-case, no-param-reassign */
const calculatorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_RESULT: {
        const calculated = calculate(
          draft.front,
          draft.operator,
          draft.back ? draft.back : draft.front,
        );
        draft.front = calculated;
        draft.back = initialState.back;
        draft.operator = initialState.operator;
        break;
      }
      case CLEAR_RESULT:
        return initialState;
      case DELETE_AG:
        if (draft.front && draft.operator && draft.back) {
          draft.back =
            draft.back.length > 1
              ? draft.back.slice(0, draft.back.length - 1)
              : '';
        } else if (draft.front && draft.operator && !draft.back) {
          draft.operator = '';
        } else if (draft.front && !draft.operator) {
          draft.front =
            draft.front.length > 1
              ? draft.front.slice(0, draft.front.length - 1)
              : initialState.front;
        }
        break;
      case UPDATE_FORMULA:
        if (action.payload.group === NUMBER_GROUP) {
          if (!draft.operator) {
            draft.front = `${
              draft.front === initialState.front ? '' : draft.front
            }${action.payload.value}`;
          } else {
            draft.back = `${draft.back}${action.payload.value}`;
          }
        }
        if (action.payload.group === OPERATOR_GROUP) {
          if (!draft.operator || !draft.back) {
            draft.operator = action.payload.value;
          } else {
            const calculated = calculate(
              draft.front,
              draft.operator,
              draft.back,
            );
            draft.front = calculated;
            draft.back = initialState.back;
            draft.operator = action.payload.value;
          }
        }
        break;
    }
  });

export default calculatorReducer;
