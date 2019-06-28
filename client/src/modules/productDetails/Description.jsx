import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import styles from './Description.scss';

const Description = props => (
	<section className={classNames(styles.root, props.className)}>
		<p>{props.description.highlight}</p>
	</section>
);

Description.propTypes = {
	className: PropTypes.string,
	description: PropTypes.object.isRequired
};

export default memo(Description);
