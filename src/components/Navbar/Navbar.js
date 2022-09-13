/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../../index.css';

function Navbar(props) {
	const [menuDisplay, setMenuDisplay] = useState(
		{display: "block"}
	);

	const [closeDisplay, setCloseDisplay] = useState(
		{display: "none"}
	);

	const [navDisplay, setNavDisplay] = useState(
		{display: "none"}
	);

	const menuStyle = {
		displays: {menuDisplay}
	};

	const closeStyle = {
		displays: {closeDisplay}
	}

	const navStyle = {
		displays: {navDisplay}
	}

	const clickMenu = () => {
		// Mobile nav open
		setMenuDisplay(
			{
				display: "none"
			}
		);
		setCloseDisplay(
			{
				display: "block"
			}
		);
		setNavDisplay(
			{
				display: "flex"
			}
		)
	};

	const clickClose = () => {
		// Mobile nav close
		setMenuDisplay(
			{
				display: "block"
			}
		);
		setCloseDisplay(
			{
				display: "none"
			}
		);
		setNavDisplay(
			{
				display: "none"
			}
		)
	};

	return(
		<div id="navbar" className="row">
			<div className="col-12 p-0">

				<div className="navbar">

					<div className="nav-brand">
						<Link to ="/">
							<img src="https://caerwyns-creations.s3.us-west-2.amazonaws.com/Caerwyn_Logo_Long.svg" alt="Brand logo" />
						</Link>
					</div>

					<div className="nav-wrapper">
						<div className="nav">
							<Link to ="/" className="nav-link">Home</Link>
							<Link to ="/products" className="nav-link">Products</Link>
							<Link to ="/gallery" className="nav-link">Gallery</Link>
							<Link to ="/about" className="nav-link">About</Link>
							<Link to ="/cart" className="nav-link"><i className="fas fa-shopping-cart" /><span className="count-cart">{props.qty}</span></Link>
						</div>
					</div>

				</div>

				<div className="navbar-mobile">

					<div className="nav-brand">
						<Link to ="/">
							<img src="https://caerwyns-creations.s3.us-west-2.amazonaws.com/Caerwyn_Logo_Long.svg" alt="Brand logo" />
						</Link>
					</div>

					<div style={menuStyle.displays.menuDisplay}>
						<div className="nav-hamburger" onClick={clickMenu}>Menu</div>
					</div>
					<div style={closeStyle.displays.closeDisplay}>
						<div className="nav-hamburger" onClick={clickClose}>X</div>
					</div>

					<div className="nav-mobile w-100" style={navStyle.displays.navDisplay}>
						<Link to ="/" className="nav-link">Home</Link>
						<Link to ="/products" className="nav-link">Products</Link>
						<Link to ="/gallery" className="nav-link">Gallery</Link>
						<Link to ="/about" className="nav-link">About</Link>
						<Link to ="/cart" className="nav-link"><i className="fas fa-shopping-cart" /><span className="count-cart">{props.qty}</span></Link>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Navbar;
