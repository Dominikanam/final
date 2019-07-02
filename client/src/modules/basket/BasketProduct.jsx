import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './BasketProduct.scss';
import { getImagesPaths } from '../../helpers/imageHelper';

const BasketProduct = props => (
	<li className={styles.root}>
		<img src={getImagesPaths(props.item)[0]} />
		<div className={styles.description}>
			<h2 className={styles.name}>{props.item.name}</h2>
			<button className={styles.remove}>remove</button>
		</div>
		<span>{props.item.price}</span>
		<div className={styles.quantity}>
			<button className={styles.decrease}>-</button>
			<span>{props.item.quantity}</span>
			<button className={styles.increase}>+</button>
		</div>
	</li>
);

BasketProduct.propTypes = {
	item: PropTypes.object.isRequired
};

export default memo(BasketProduct);
