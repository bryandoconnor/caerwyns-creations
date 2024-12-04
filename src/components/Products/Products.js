/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Cards from '../Card/Card';
import '../Card/Card.css';
import '../Extras/Heroes.css';

function ProductsHeading() {
	return (
		<div>
			<div className="ProductsHero" />
			<div className="d-block row text-center">
				<div className="col-12 p-0 text-center">
					<h1 className="main-heading">Explore Our Creations</h1>
				</div>
			</div>
		</div>
	);
}

function Products(props) {
	return (
		<div className="container-fluid p-0">
			<ProductsHeading />
			<Cards {...props} />
		</div>
	);
}

export default Products;
