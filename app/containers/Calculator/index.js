/**
 *
 * Calculator
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import KeyPad from 'components/KeyPad';
import Screen from 'components/Screen';
import { getResult, clearResult, deleteAg, updateFormula } from './actions';
import { makeSelectResult } from './selectors';
import reducer from './reducer';
import {
  LAYOUT,
  SUPPORTED_KEYS,
  OPERATION_KEYS,
  CLEAR_KEYS,
  SUBMIT_KEYS,
  DELETE_KEYS,
  CLEAR_GROUP,
  DELETE_GROUP,
  SUBMIT_GROUP,
  NUMBER_GROUP,
  OPERATOR_GROUP,
} from './constants';
import styles from './Calculator.scss';

const getGroupOfKey = key => {
  if (CLEAR_KEYS.includes(key)) return CLEAR_GROUP;
  if (DELETE_KEYS.includes(key)) return DELETE_GROUP;
  if (SUBMIT_KEYS.includes(key)) return SUBMIT_GROUP;
  if (OPERATION_KEYS.includes(key)) return OPERATOR_GROUP;
  return NUMBER_GROUP;
};

export const Calculator = props => {
  const keyDownHandler = e => {
    if (SUPPORTED_KEYS.includes(e.key)) {
      e.preventDefault();
      props.calculatorHandler(e.key);
    }
  };

  useInjectReducer({ key: 'calculator', reducer });

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler, false);

    return () => {
      document.removeEventListener('keydown', keyDownHandler, false);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Screen value={props.result} />
      <KeyPad layout={LAYOUT} onChange={props.calculatorHandler} />
    </div>
  );
};

Calculator.propTypes = {
  calculatorHandler: PropTypes.func.isRequired,
  result: PropTypes.string,
};

Calculator.defaultProps = {
  result: '0',
};

const mapStateToProps = createStructuredSelector({
  result: makeSelectResult(),
});

export const mapDispatchToProps = dispatch => ({
  calculatorHandler: key => {
    const group = getGroupOfKey(key);
    switch (group) {
      case CLEAR_GROUP:
        dispatch(clearResult());
        break;
      case DELETE_GROUP:
        dispatch(deleteAg());
        break;
      case SUBMIT_GROUP:
        dispatch(getResult());
        break;
      default:
        dispatch(
          updateFormula({
            group,
            value: key,
          }),
        );
        break;
    }
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Calculator);
