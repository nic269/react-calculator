/**
 *
 * KeyPad
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './KeyPad.scss';

const generateRowId = key => `row_${key}`;

const KeyPad = ({ onChange, layout }) => {
  const onClickButton = key => () => onChange(key);
  return (
    <div className={styles.container}>
      {layout.map((row, idx) => (
        <div className={styles.row} key={generateRowId(idx)}>
          {row.map(item => (
            <button
              type="button"
              key={item.id}
              className={cx(styles.key, styles[item.size], styles[item.group])}
              onClick={onClickButton(item.key)}
              title={item.description}
            >
              {item.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

KeyPad.propTypes = {
  onChange: PropTypes.func,
  layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

KeyPad.defaultProps = {
  onChange: undefined,
  layout: [[]],
};

export default memo(KeyPad);
