/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Calculator from 'containers/Calculator/Loadable';
import styles from './HomePage.scss';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Calculator application</title>
        <meta name="description" content="Calculator application" />
      </Helmet>
      <div className={styles.container}>
        <Calculator />
      </div>
    </>
  );
}
