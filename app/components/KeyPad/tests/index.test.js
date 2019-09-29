/**
 *
 * Tests for KeyPad
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { LAYOUT } from 'containers/Calculator/constants';
import KeyPad from '../index';

describe('<KeyPad />', () => {
  let props;
  beforeEach(() => {
    props = {
      layout: LAYOUT,
      onChange: jest.fn(),
    };
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<KeyPad />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<KeyPad {...props} />);
    expect(firstChild).toMatchSnapshot();
  });

  it('Should trigger onChange when a button has been clicked', () => {
    const { getByText } = render(<KeyPad {...props} />);
    fireEvent.click(getByText('clear'));
    expect(props.onChange).toHaveBeenCalledWith('Escape');
  });
});
