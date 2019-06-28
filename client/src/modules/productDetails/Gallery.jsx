import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import styles from './Gallery.scss';

const Gallery = props => (
	<section className={classNames(styles.root, props.className)}>
		<img src={props.images[0]} />
	</section>
);

Gallery.propTypes = {
	className: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default memo(Gallery);
