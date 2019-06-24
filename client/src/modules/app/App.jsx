import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

const App = ({ children }) => (
	<section className={styles.root}>
		<header>
			<h1>Hello World!</h1>
		</header>
		<main>{children}</main>
		<footer></footer>
	</section>
);

App.propTypes = {
	children: PropTypes.node.isRequired
};

export default memo(App);
