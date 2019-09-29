/*
 *
 * Calculator constants
 *
 */
import _flattenDeep from 'lodash/flattenDeep';

export const GET_RESULT = 'app/Calculator/GET_RESULT';
export const CLEAR_RESULT = 'app/Calculator/CLEAR_RESULT';
export const DELETE_AG = 'app/Calculator/DELETE_AG';
export const UPDATE_FORMULA = 'app/Calculator/UPDATE_FORMULA';

export const ADD_KEY = '+';
export const SUB_KEY = '-';
export const MUL_KEY = '*';
export const DIV_KEY = '/';
export const CLEAR_GROUP = 'clear';
export const DELETE_GROUP = 'delete';
export const OPERATOR_GROUP = 'operator';
export const SUBMIT_GROUP = 'submit';
export const NUMBER_GROUP = 'number';
export const OPERATION_KEYS = [ADD_KEY, SUB_KEY, MUL_KEY, DIV_KEY];
export const SUBMIT_KEYS = ['Enter', '='];
export const CLEAR_KEYS = ['Escape'];
export const DELETE_KEYS = ['Backspace'];
export const LAYOUT = [
  [
    {
      id: '1',
      name: 'AC',
      group: CLEAR_GROUP,
      size: 'medium',
      key: 'Escape',
      description: 'Clear all (or press Esc)',
    },
    {
      id: '1_1',
      name: '⇤',
      group: DELETE_GROUP,
      key: 'Backspace',
      description: 'Delete (or press Backspace)',
    },
    {
      id: '2',
      name: '/',
      group: OPERATOR_GROUP,
      key: DIV_KEY,
      description: 'Divide (or press /)',
    },
  ],
  [
    {
      id: '3',
      name: '1',
      group: NUMBER_GROUP,
      key: '1',
    },
    {
      id: '4',
      name: '2',
      group: NUMBER_GROUP,
      key: '2',
    },
    {
      id: '5',
      name: '3',
      group: NUMBER_GROUP,
      key: '3',
    },
    {
      id: '6',
      name: '*',
      group: OPERATOR_GROUP,
      key: MUL_KEY,
      description: 'Multiply (or press *)',
    },
  ],
  [
    {
      id: '7',
      name: '4',
      group: NUMBER_GROUP,
      key: '4',
    },
    {
      id: '8',
      name: '5',
      group: NUMBER_GROUP,
      key: '5',
    },
    {
      id: '9',
      name: '6',
      group: NUMBER_GROUP,
      key: '6',
    },
    {
      id: '10',
      name: '-',
      group: OPERATOR_GROUP,
      key: SUB_KEY,
      description: 'Subtract (or press -)',
    },
  ],
  [
    {
      id: '11',
      name: '7',
      group: NUMBER_GROUP,
      key: '7',
    },
    {
      id: '12',
      name: '8',
      group: NUMBER_GROUP,
      key: '8',
    },
    {
      id: '13',
      name: '9',
      group: NUMBER_GROUP,
      key: '9',
    },
    {
      id: '14',
      name: '+',
      group: OPERATOR_GROUP,
      key: ADD_KEY,
      description: 'Add (or press +)',
    },
  ],
  [
    {
      id: '15',
      name: '0',
      group: NUMBER_GROUP,
      size: 'large',
      key: '0',
    },
    {
      id: '16',
      name: '＝',
      group: SUBMIT_GROUP,
      key: '=',
      description: 'Equal (or press Enter)',
    },
  ],
];
export const SUPPORTED_KEYS = [
  ..._flattenDeep(LAYOUT).map(item => item.key),
  'Enter',
  'Backspace',
];
