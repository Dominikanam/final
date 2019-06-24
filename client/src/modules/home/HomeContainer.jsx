import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ProductsActions from '../../actions/products';
import Home from './Home.jsx';

const actions = { ...ProductsActions };

class HomeContainer extends PureComponent {
	static propTypes = {
		products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
		getProducts: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getProducts();
	}

	render() {
		return <Home products={this.props.products} />;
	}
}

export default connect(
	state => ({
		products: state.products.items
	}),
	dispatch => bindActionCreators(actions, dispatch)
)(HomeContainer);
