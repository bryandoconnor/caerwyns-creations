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
    
	const marketingCart = () => {
		setCarts(
			{
				productName: "Marketing Package",
				productShortname: "Marketing",
				productQuantity: 1,
				productPrice: 14999.99,
				productRowHeader: "This package includes logo, business card, envelope & letterhead designs as well as a style guide!",
				productIncludes1: "✓ Logo Design",
				productIncludes2: "✓ Business Card Design",
				productIncludes3: "✓ Style Guide",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Branding-icon.svg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6JTXU56HHYALG"
			}
		);
	};
    
	const logoCart = () => {
		setCarts(
			{
				productName: "Logo Design",
				productShortname: "Logo",
				productQuantity: 1,
				productPrice: 9999.99,
				productRowHeader: "Logo design includes 4 logo versions. 10 thumbnails, 2 revisions, 3 roughs, and 1 final world-class logo!",
				productIncludes1: "✓ Refresh or Recreate a Logo",
				productIncludes2: "✓ Professional Look",
				productIncludes3: "✓ Vector Files",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Logos-icon.svg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B826XEELJR6Y2"
			}
		);
	};
    
	const businesscardCart = () => {
		setCarts(
			{
				productName: "Business Card Design",
				productShortname: "Business Card",
				productQuantity: 1,
				productPrice: 499.99,
				productRowHeader: "Your business card design includes 3 layout roughs, one final layout and file formats for future use (print and vector)!",
				productIncludes1: "✓ Beautiful Custom Designs",
				productIncludes2: "✓ Professional Templates",
				productIncludes3: "✓ Print-ready Files",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/BusinessCards-icon.svg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XHB43GC3Z8UKA"
			}
		);
	};

	const illustrationCart = () => {
		setCarts(
			{
				productName: "Custom Illustrations",
				productShortname: "Illustrations",
				productQuantity: 1,
				productPrice: 8999.99,
				productRowHeader: "Your custom illustration includes 3 layout roughs, one final layout and file formats for future use (print only)!",
				productIncludes1: "✓ Professional Illustration",
				productIncludes2: "✓ Choose Style and Color Options",
				productIncludes3: "✓ Print-ready Files",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Illustrations-icon.svg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KECFQC6L3UBQU"
			}
		);
	};

	const inviteCart = () => {
		setCarts(
			{
				productName: "Wedding Invite Design",
				productShortname: "Wedding Invite",
				productQuantity: 1,
				productPrice: 399.99,
				productRowHeader: "Custom wedding invite design includes 3 layout roughs, one final layout and file formats that last a lifetime!",
				productIncludes1: "✓ Create Your Dream Invite",
				productIncludes2: "✓ Professional Template",
				productIncludes3: "✓ Print-ready Files",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Invites-icon.svg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BJ49P6J8N5MQL"
			}
		);
	};

	const websiteCart = () => {
		setCarts(
			{
				productName: "Website Design",
				productShortname: "Website",
				productQuantity: 1,
				productPrice: 19999.99,
				productRowHeader: "Your professional website design includes a SPA with 5 pages, 10 hand-picked images, and modern iconography!",
				productIncludes1: "✓ Fully Functioning Code",
				productIncludes2: "✓ Professional UX/UI",
				productIncludes3: "✓ Amazing Images and Icons",
				productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Web-icon.svg",
				productLinkURL: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PTGDMFBKX9P6Q"
			}
		);
	};

	const chooseClick = (e) => {
		if(e.currentTarget.id === "Marketing Package") {
			marketingCart();
		} else if(e.currentTarget.id === "Logo Design") {
			logoCart();
		} else if (e.currentTarget.id === "Business Card Design") {
			businesscardCart();
		} else if (e.currentTarget.id === "Custom Illustrations") {
			illustrationCart();
		} else if (e.currentTarget.id === "Wedding Invite Design") {
			inviteCart();
		} else if (e.currentTarget.id === "Website Design") {
			websiteCart();
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