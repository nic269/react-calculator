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
        <h2 className={styles.title}>Calculator</h2>
        <p className={styles.desc}>
          This is a simple calculator application, you can click on the buttons
          of application or press keyboard also.
        </p>
        <Calculator />
      </div>
    </>
  );
}
