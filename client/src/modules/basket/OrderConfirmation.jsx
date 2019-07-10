import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Msg from './OrderConfirmation.msg';
import styles from './OrderConfirmation.scss';

const OrderConfirmation = props =>
	ReactDOM.createPortal(
		<dialog className={styles.root} open>
			<Msg s="message" />
			<button onClick={props.onClose}>
				<Msg s="confirm" />
			</button>
		</dialog>,
		document.body
	);

OrderConfirmation.propTypes = {
	onClose: PropTypes.func.isRequired,
	order: PropTypes.object.isRequired
};

export default memo(OrderConfirmation);
