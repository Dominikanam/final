import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/images/logo.png';
import Menu from './Menu.jsx';
import styles from './Header.scss';

const Header = () => (
	<header className={styles.root}>
		<h1 className={styles.title}>
			<Link to="/">
				<img src={logo} />
			</Link>
		</h1>
		<Menu className={styles.menu} />
	</header>
);

export default memo(Header);
