/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../../index.css';
import Cards from '../Card/Card';
import './Cart.css';

function Cart(props) {
	const taxCalc = Number(props.productPrice * .07).toFixed(2);
	const totalCalc = (Number(props.productPrice) + Number(taxCalc)).toFixed(2);

	return (
		<div className="container-fluid p-0">

			<div className="row lg-margin">
				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center">
					<img alt="Product Icon" className="cart-product-img" src={props.productLogo}  />
				</div>

				<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
					<div>
						<h3 className="lg-margin cart-title">{props.productName}</h3>
						<div className="lg-paragraph">
							<div>{props.productRowHeader}</div>
							<div>{props.productIncludes1}</div>
							<div>{props.productIncludes2}</div>
							<div>{props.productIncludes3}</div>
						</div>
						<button type="button" className="cart-button" onClick={props.onClick1}>Clear Shopping Cart</button>
					</div>
				</div>

				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center">
					<div>
						<h5 className="padding-20 cart-item-heading">{props.productShortname}</h5>
						<div className="lg-paragraph sm-margin sm-padding">Qty: {props.productQuantity}</div>
						<div className="lg-paragraph sm-margin sm-padding">Price: ${props.productPrice.toFixed(2)}</div>
						<div className="lg-paragraph sm-margin sm-padding">Tax: ${taxCalc}</div>
						<hr className="hr mx-auto my-0" />
						<div className="lg-paragraph sm-margin sm-padding">Total: ${totalCalc}</div>
						<a href={props.productLinkURL} target="_blank" rel="noreferrer">
							<button type="button" className="btn main-button md-button success-btn">Proceed to Checkout</button>
						</a>
					</div>
				</div>

			</div>

			<hr className="hr" />

			<div className="row text-center">
				<div className="col-12 p-0">
					<h3 className="lg-margin lg-padding main-heading">Add an Item</h3>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div>
					<Cards {...props} />
				</div>

			</div>

		</div>
	);
}

export default Cart;
