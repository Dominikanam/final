import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImagesPaths } from '../../helpers/imageHelper';
import { FaCartPlus } from 'react-icons/fa';
import styles from './ProductItem.scss';

const ProductItem = ({ product }) => (
	<li className={styles.root}>
		<Link to={`/product/${product.id}`}>
			<div className={styles.product}>
				<img src={getImagesPaths(product)[0]} />
				<h3 className={styles.name}>{product.name}</h3>
				<div className={styles.shop}>
					<div className={styles.price}>
						{product.prevPrice > 0 && (
							<span className={styles.prev}>£{product.prevPrice}</span>
						)}
						<span className={styles.current}>£{product.price}</span>
					</div>
					<button>
						<FaCartPlus />
					</button>
				</div>
			</div>
		</Link>
	</li>
);

ProductItem.propTypes = {
	product: PropTypes.object.isRequired
};

export default memo(ProductItem);
