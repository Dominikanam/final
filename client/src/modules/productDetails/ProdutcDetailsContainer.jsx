import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductDetails from './ProductDetails.jsx';

class ProductDetailsContainer extends PureComponent {
	static propTypes = {
		product: PropTypes.object
	};

	render() {
		return <ProductDetails product={this.props.product} />;
	}
}

export default connect((state, ownProps) => ({
	product: state.products.items.find(product => product.id == ownProps.match.params.id)
}))(ProductDetailsContainer);
