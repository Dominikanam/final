import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from './App.scss';

const App = ({ children }) => (
	<section className={styles.root}>
		<Header />
		<main>{children}</main>
		<Footer />
	</section>
);

App.propTypes = {
	children: PropTypes.node.isRequired
};

export default memo(App);
