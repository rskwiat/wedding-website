import React from 'react';
import classNames from 'classnames'

const styles = {
  base: classNames('container'),
  gridStyle: classNames('row', 'row-flex')
};

const Home = () => {
	return (
		<div className={styles.base}>
      <div className={styles.gridStyle}>
        <div>
        home
        </div>
      <div>
        <p>home</p>
        </div>
      <div>
        home
        </div>

      </div>
		</div>
	);
}

export default Home;
