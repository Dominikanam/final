import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ProductsActions from '../../actions/products';
import Products from './Products.jsx';

const actions = { ...ProductsActions };

const productsPerPage = 6;

class ProductsContainer extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		getProducts: PropTypes.func.isRequired,
		products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
	};

	constructor(props) {
		super(props);

		this.state = { page: 1, pageCount: this.getPageCount(), products: this.getPageProducts(1) };

		this.goToPage = this.goToPage.bind(this);
	}

	componentDidMount() {
		this.props.getProducts();
	}

	componentDidUpdate(prevProps) {
		if (this.props.products !== prevProps.products) {
			this.setState({ pageCount: this.getPageCount(), products: this.getPageProducts() });
		}
	}

	getPageCount() {
		return Math.ceil(this.props.products.length / productsPerPage);
	}

	getPageProducts(page) {
		const currentPage = page || this.state.page;
		const startIndex = Math.max((currentPage - 1) * productsPerPage, 0);
		const endIndex = Math.min(currentPage * productsPerPage, this.props.products.length);
		return this.props.products.slice(startIndex, endIndex);
	}

	goToPage(page) {
		if (page === this.state.page || page <= 0 || page > this.state.pageCount) {
			return;
		}
		this.setState({ page, products: this.getPageProducts(page) });
	}

	render() {
		return (
			<Products
				className={this.props.className}
				goToPage={this.goToPage}
				page={this.state.page}
				pageCount={this.state.pageCount}
				products={this.state.products}
			/>
		);
	}
}

export default connect(
	state => ({
		products: state.products.items
	}),
	dispatch => bindActionCreators(actions, dispatch)
)(ProductsContainer);
