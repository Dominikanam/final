import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import styles from './Variant.scss';

const Variant = props => <section className={classNames(styles.root, props.className)} />;

Variant.propTypes = {
	className: PropTypes.string
};

export default memo(Variant);
