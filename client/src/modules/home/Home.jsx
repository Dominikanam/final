import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem.jsx';
import styles from './Home.scss';

const Home = ({ products }) => (
	<section className={styles.root}>
		<ul>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	</section>
);

Home.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default memo(Home);
