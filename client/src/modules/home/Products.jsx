import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Pagination from './Pagination.jsx';
import ProductItemContainer from './ProductItemContainer.jsx';
import styles from './Products.scss';

const Products = props => (
	<section className={classNames(styles.root, props.className)}>
		<ul>
			{props.products.map(product => (
				<ProductItemContainer key={product.id} product={product} />
			))}
		</ul>
		<Pagination goToPage={props.goToPage} page={props.page} pageCount={props.pageCount} />
	</section>
);

Products.propTypes = {
	className: PropTypes.string,
	goToPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	pageCount: PropTypes.number.isRequired,
	products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

Products.defaultProps = {
	page: 1,
	pageCount: 1
};

export default memo(Products);
