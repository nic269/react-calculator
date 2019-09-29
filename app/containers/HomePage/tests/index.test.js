import React from 'react';
import { render } from 'react-testing-library';

import HomePage from '../index';

jest.mock('containers/Calculator/Loadable', () => 'Mockedcalculator');

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<HomePage />);
    expect(firstChild).toMatchSnapshot();
  });
});
