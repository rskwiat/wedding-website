import React from 'react';
import styles from '../styles';
import classNames from 'classnames';

const pageStyle = {
  error: classNames('error')
}

const Error = () => {
  return (
    <div className={styles.base}>
      <div className={styles.gridStyle}>
        <div className={pageStyle.error}>
          <h1>Error Page</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Error;
