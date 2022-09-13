/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import productsAndServices from '../Products/ProductsAndServices';

function Cards(props) {
	const productCards = productsAndServices.map((res) =>
		<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" key={res.productId}>
			<Link to="/cart" className="card-link d-block text-center" id={res.productName} onClick={props.onClickEvent}>
				<div className="card">
					<div className="card-top d-inline-block m-0 w-100" style={{
						backgroundColor: res.productColor,
						backgroundImage: `url(${  res.productLogo  })`,
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat'
					}} />
					<div className="card-body d-inline-block w-100">
						<div className="card-title m-0">
							<h5>{res.productName}</h5>
						</div>
						<div className="card-text text-left">
							<p className="card-padding mx-auto my-0 text-center">{res.productCardHeader}</p>
							<ul>
								<div>{res.productIncludes1}</div>
								<div>{res.productIncludes2}</div>
								<div>{res.productIncludes3}</div>
							</ul>
							<div className="text-center">
								<button type="button" className="btn btn-success card-button main-button mx-auto my-0">
									{res.productButtonText1} | {res.productPrice}
								</button>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
	return (
		<div className="row">
			{productCards}
		</div>
	);
}

export default Cards;