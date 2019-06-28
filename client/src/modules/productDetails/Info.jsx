import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Description from './Description.jsx';
import Variant from './Variant.jsx';
import styles from './Info.scss';

const Info = props => (
	<section className={classNames(styles.root, props.className)}>
		<h1>{props.product.name}</h1>
		<Description description={props.product.description} />
		<Variant />
		<div className={styles.price}>
			{props.product.prevPrice > 0 && (
				<span className={styles.prev}>£{props.product.prevPrice}</span>
			)}
			<span className={styles.current}>£{props.product.price}</span>
		</div>
	</section>
);

Info.propTypes = {
	className: PropTypes.string,
	product: PropTypes.object.isRequired
};

export default memo(Info);
