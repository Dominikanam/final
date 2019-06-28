import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import { Link } from 'react-router-dom';
import Msg from './SiteMap.msg';
import styles from './SiteMap.scss';

const SiteMap = props => (
	<ul className={classNames(styles.root, props.className)}>
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
	</ul>
);

SiteMap.propTypes = {
	className: PropTypes.string
};

export default memo(SiteMap);
