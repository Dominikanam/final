import React, { memo } from 'react';
import SideNav from './SideNav.jsx';
import ProductsContainer from './ProductsContainer.jsx';
import styles from './Home.scss';

const Home = () => (
	<section className={styles.root}>
		<SideNav className={styles.sideNav} />
		<ProductsContainer className={styles.products} />
	</section>
);

export default memo(Home);
