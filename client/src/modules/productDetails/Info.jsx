import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Description from './Description.jsx';
import Variant from './Variant.jsx';
import styles from './Info.scss';

const Info = props => (
	<section className={classNames(styles.root, props.className)}>
		<h1 className={styles.watchName}>{props.product.name}</h1>
		<div className={styles.divider} />
		<Description description={props.product.description} />
		<Variant />
		<div className={styles.shop}>
			<div className={styles.price}>
				{props.product.prevPrice > 0 && (
					<span className={styles.prev}>£{props.product.prevPrice}</span>
				)}
				<span className={styles.current}>£{props.product.price}</span>
			</div>
			<button onClick={() => props.addBasketProduct({ productId: props.product.id })}>
				Add to basket
			</button>
		</div>
	</section>
);

Info.propTypes = {
	addBasketProduct: PropTypes.func.isRequired,
	className: PropTypes.string,
	product: PropTypes.object.isRequired
};

export default memo(Info);
