/**
 *
 * Tests for Caculator
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import configureStore from '../../../configureStore';
import { Calculator, mapDispatchToProps } from '../index';
import { getResult, clearResult, deleteAg, updateFormula } from '../actions';
import { NUMBER_GROUP, OPERATOR_GROUP } from '../constants';

jest.mock('components/KeyPad', () => 'MockedKeyPad');
jest.mock('components/Screen', () => 'MockedScreen');

describe('<Caculator />', () => {
  let store;
  let props;

  beforeAll(() => {
    props = {
      calculatorHandler: jest.fn(),
    };
    store = configureStore({}, browserHistory);
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Calculator {...props} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should not update calculator when user press keyboard with key in supported list', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Calculator {...props} />
      </Provider>,
    );
    fireEvent.keyDown(firstChild, { key: 'A', code: 65 });

    expect(props.calculatorHandler).not.toHaveBeenCalled();
  });

  it('Should update calculator when user press keyboard with key in supported list', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Calculator {...props} />
      </Provider>,
    );
    fireEvent.keyDown(firstChild, { key: 'Enter', code: 13 });

    expect(props.calculatorHandler).toHaveBeenCalledWith('Enter');
  });
});

describe('mapDispatchToProps', () => {
  describe('calculatorHandler', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.calculatorHandler).toBeDefined();
    });

    it('should call getResult', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.calculatorHandler('Enter');
      expect(dispatch).toHaveBeenCalledWith(getResult());
    });

    it('should call clearResult', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.calculatorHandler('Escape');
      expect(dispatch).toHaveBeenCalledWith(clearResult());
    });

    it('should call deleteAg', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.calculatorHandler('Backspace');
      expect(dispatch).toHaveBeenCalledWith(deleteAg());
    });

    it('should call updateFormula with number', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.calculatorHandler('1');
      expect(dispatch).toHaveBeenCalledWith(
        updateFormula({
          value: '1',
          group: NUMBER_GROUP,
        }),
      );
    });

    it('should call updateFormula with operator', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.calculatorHandler('+');
      expect(dispatch).toHaveBeenCalledWith(
        updateFormula({
          value: '+',
          group: OPERATOR_GROUP,
        }),
      );
    });
  });
});
