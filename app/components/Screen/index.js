/**
 *
 * Screen
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';

import styles from './Screen.scss';

const Screen = ({ value }) => (
  <div className={styles.container}>
    <Textfit mode="single">{value}</Textfit>
  </div>
);

Screen.propTypes = {
  value: PropTypes.string,
};

Screen.defaultProps = {
  value: '',
};

export default memo(Screen);
