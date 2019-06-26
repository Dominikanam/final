import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import SiteMap from './SiteMap.jsx';
import Msg from './Footer.msg';
import styles from './Footer.scss';

const Footer = props => (
	<footer className={classNames(styles.root, props.className)}>
		<p>
			<Msg s="copyrights" />
		</p>
		<SiteMap className={styles.siteMap} />
	</footer>
);

Footer.propTypes = {
	className: PropTypes.string
};

export default memo(Footer);
