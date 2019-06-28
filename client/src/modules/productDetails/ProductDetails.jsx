import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { getImagesPaths } from '../../helpers/imageHelper';
import Gallery from './Gallery.jsx';
import Info from './Info.jsx';
import styles from './ProductDetails.scss';

const ProductDetails = props => (
	<section className={styles.root}>
		<Gallery className={styles.gallery} images={getImagesPaths(props.product)} />
		<Info className={styles.info} product={props.product} />
	</section>
);

ProductDetails.propTypes = {
	product: PropTypes.object.isRequired
};

export default memo(ProductDetails);
