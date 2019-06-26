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
				<li>abc</li>
			</ul>
			<h2 className={styles.header}>
				<Msg s="filterHeader" />
			</h2>
			<ul>
				<li>def</li>
			</ul>
		</div>
	</nav>
);
SideNav.propTypes = {
	className: PropTypes.string
};

export default memo(SideNav);
