/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import ProductsContext from './contexts/ProductsContext';

function App() {
	const [carts, setCarts] = useState(
		{
			productName: "Nothing in Cart",
			productShortname: "No Item",
			productQuantity: 0,
			productPrice: 0.00,
			productRowHeader: "",
			productIncludes1: "",
			productIncludes2: "",
			productIncludes3: "",
			productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/NoItem-icon.svg",
			productLinkURL: "/cart"
		}
	);
    
	const emptyCart = () => {
		setCarts(
			{
				productName: "Nothing in Cart",
				productShortname: "No Item",
				productQuantity: 0,
				productPrice: 0.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/NoItem-icon.svg",
				productLinkURL: "/cart"
			}
		);
	};
    
	const aztecCart = () => {
		setCarts(
			{
				productName: "Aztec Bracelet",
				productShortname: "Aztec Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Aztec.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LMEMQ3KC677SG"
			}
		);
	};

	const braveCart = () => {
		setCarts(
			{
				productName: "Brave Bracelet",
				productShortname: "Brave Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Brave.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JTEBHSVVU5ZNW"
			}
		);
	};

	const calmCart = () => {
		setCarts(
			{
				productName: "Calm Bracelet",
				productShortname: "Calm Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Calm.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PSXVU55MNQGC6"
			}
		);
	};

	const canyonCart = () => {
		setCarts(
			{
				productName: "Canyon Bracelet",
				productShortname: "Canyon Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Canyon.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSPDS6RH3FE94"
			}
		);
	};
    
	const lunaCart = () => {
		setCarts(
			{
				productName: "Luna Bracelet",
				productShortname: "Luna Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Luna.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E7SKQ9QQTXB2U"
			}
		);
	};

	const mermaidCart = () => {
		setCarts(
			{
				productName: "Mermaid Bracelet",
				productShortname: "Mermaid Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Mermaid.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BQW26MMMGKWJ2"
			}
		);
	};
    
	const princessCart = () => {
		setCarts(
			{
				productName: "Princess Bracelet",
				productShortname: "Princess Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Princess.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=439RGCJMCPTLJ"
			}
		);
	};

	const shineCart = () => {
		setCarts(
			{
				productName: "Shine Bracelet",
				productShortname: "Shine Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Shine_Wrist.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7A98M947FQML"
			}
		);
	};

	const surfCart = () => {
		setCarts(
			{
				productName: "Surf Bracelet",
				productShortname: "Surf Bracelet",
				productQuantity: 1,
				productPrice: 2.00,
				productRowHeader: "",
				productIncludes1: "",
				productIncludes2: "",
				productIncludes3: "",
				productLogo: "https://caerwyns-creations.s3.us-west-2.amazonaws.com/Surf.jpg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P4DLXF2C97MHL"
			}
		);
	};
	

	const chooseClick = (e) => {
		if(e.currentTarget.id === "Aztec Bracelet") {
			aztecCart();
		} else if (e.currentTarget.id === "Brave Bracelet") {
			braveCart();
		} else if (e.currentTarget.id === "Calm Bracelet") {
			calmCart();
		} else if (e.currentTarget.id === "Canyon Bracelet") {
			canyonCart();
		} else if(e.currentTarget.id === "Luna Bracelet") {
			lunaCart();
		} else if (e.currentTarget.id === "Mermaid Bracelet") {
			mermaidCart();
		} else if (e.currentTarget.id === "Princess Bracelet") {
			princessCart();
		} else if (e.currentTarget.id === "Shine Bracelet") {
			shineCart();
		} else if (e.currentTarget.id === "Surf Bracelet") {
			surfCart();
		}
	}

	return (
		<>
			<Navbar qty={carts.productQuantity} />

			<ProductsContext.Provider value={carts}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					
					<Route exact path="/products" 
						element={<Products {...carts}
							onClickEvent={chooseClick}
							onClick1={emptyCart}
						/>}
					/>
					
					<Route exact path="/gallery" element={<Gallery />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/cart" element={
						<Cart {...carts}
							onClickEvent={chooseClick}
							onClick1={emptyCart}
						/>} 
					/>
				</Routes>
			</ProductsContext.Provider>

			<Footer />
		</>
	)
}

export default App;