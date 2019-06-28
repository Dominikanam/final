import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import Msg from './Menu.msg';
import styles from './Menu.scss';

const Menu = props => (
	<nav className={classNames(styles.root, props.className)}>
		<ul>
			<li>
				<Link to="/">
					<Msg s="home" />
				</Link>
			</li>
			<li>
				<Msg s="faq" />
			</li>
			<li>
				<Msg s="terms" />
			</li>
			<li>
				<Msg s="contact" />
			</li>
			<li>
				<Link to="/basket">
					<FaShoppingBasket className={styles.basket} />
				</Link>
			</li>
		</ul>
	</nav>
);

Menu.propTypes = {
	className: PropTypes.string
};

export default memo(Menu);
