import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Msg from './Pagination.msg';
import styles from './Pagination.scss';

const Pagination = props => (
	<nav className={classNames(styles.root, props.className)}>
		<ul>
			<li onClick={() => props.goToPage(1)}>
				<Msg s="first" />
			</li>
			<li onClick={() => props.goToPage(props.page - 1)}>
				<Msg s="prev" />
			</li>
			<li onClick={() => props.goToPage(props.page + 1)}>
				<Msg s="next" />
			</li>
			<li onClick={() => props.goToPage(props.pageCount)}>
				<Msg s="last" />
			</li>
		</ul>
	</nav>
);

Pagination.propTypes = {
	className: PropTypes.string,
	goToPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	pageCount: PropTypes.number.isRequired
};

Pagination.defaultProps = {
	page: 1,
	pageCount: 1
};

export default memo(Pagination);
