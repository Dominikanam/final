import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Msg from './SideNav.msg';
import styles from './SideNav.scss';

const SideNav = props => (
	<nav className={classNames(styles.root, props.className)}>
		<div className={styles.box}>
			<h2 className={styles.header}>
				<Msg s="sortHeader" />
			</h2>
			<ul>
				<li>Highest Price</li>
				<li>Lowest Price</li>
			</ul>
			<h2 className={styles.header}>
				<Msg s="filterHeader" />
			</h2>
			<ul>
				<li>Recipent</li>
				<li>Case Color</li>
				<li>Strap Type</li>
				<li>Movement</li>
			</ul>
		</div>
	</nav>
);
SideNav.propTypes = {
	className: PropTypes.string
};

export default memo(SideNav);
