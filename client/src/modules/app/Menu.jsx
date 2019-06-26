import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import { FaShoppingBasket } from 'react-icons/fa';
import Msg from './Menu.msg';
import styles from './Menu.scss';

const Menu = props => (
	<nav className={classNames(styles.root, props.className)}>
		<ul>
			<li>
				<Msg s="home" />
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
				<FaShoppingBasket className={styles.basket} />
			</li>
		</ul>
	</nav>
);

Menu.propTypes = {
	className: PropTypes.string
};

export default memo(Menu);
