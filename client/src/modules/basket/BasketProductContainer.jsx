import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasketProduct from './BasketProduct.jsx';
import * as BasketActions from '../../actions/basket';

const actions = { ...BasketActions };

class BasketProductContainer extends PureComponent {
	static propTypes = {
		decrementProduct: PropTypes.func.isRequired,
		incrementProduct: PropTypes.func.isRequired,
		item: PropTypes.object.isRequired,
		removeProduct: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.remove = this.remove.bind(this);
		this.incrementQuantity = this.incrementQuantity.bind(this);
		this.decrementQuantity = this.decrementQuantity.bind(this);
	}

	remove() {
		this.props.removeProduct({ productId: this.props.item.id });
	}

	incrementQuantity() {
		this.props.incrementProduct({ productId: this.props.item.id });
	}

	decrementQuantity() {
		this.props.decrementProduct({ productId: this.props.item.id });
	}

	render() {
		return (
			<BasketProduct
				decrementQuantity={this.decrementQuantity}
				incrementQuantity={this.incrementQuantity}
				item={this.props.item}
				remove={this.remove}
			/>
		);
	}
}

export default connect(
	null,
	dispatch => bindActionCreators(actions, dispatch)
)(BasketProductContainer);
