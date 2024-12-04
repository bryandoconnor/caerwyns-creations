/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Extras/Heroes.css';
import '../../index.css';

function HomeHeading() {
	return (
		<div>
			<div className="IndexHero" />
			<div className="d-block row text-center">
				<h1 className="main-heading">Welcome to Caerwyn's Creations!</h1>
				<p className="xlg-paragraph lg-margin lg-padding">
					Dive into a world of imagination and craftsmanship! Whether you're seeking unique products or just exploring, 
					you've come to the right place.
				</p>
				<p className="xlg-paragraph lg-margin lg-padding">
					Caerwyn's Creations is where ideas come alive. Each item is crafted with passion and care to bring a touch of magic to your everyday life.
					Browse, shop, and let your creativity soar with us!
				</p>
			</div>
		</div>
	);
}

function HomeContent() {
	return(
		<div>
			<div className="text-center">
				<Link to="/products">
					<button className="lg-button lg-margin lg-padding main-button">Discover Your Next Favorite Thing!</button>
				</Link>
			</div>

			<div className="links-div">

				<div className="mx-auto my-0 row w-75">

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
						<h3 className="link-heading mx-auto my-0">Products</h3>
						<Link to="/products" className="d-inline-block product-link">
							<img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Sword-icon.svg" className="mx-auto my-0 link-icon w-100" alt="" />
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
						<h3 className="link-heading mx-auto my-0">Gallery</h3>
						<Link to="/gallery" className="d-inline-block product-link">
							<img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/CrystalBall-icon.svg" className="mx-auto my-0 link-icon w-100" alt="" />
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
						<h3 className="link-heading mx-auto my-0">About</h3>
						<Link to="/about" className="d-inline-block product-link">
							<img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Potion-icon.svg" className="mx-auto my-0 link-icon w-100" alt="" />
						</Link>
					</div>

				</div>

			</div>
		</div>
	);
}

function Home() {
	return (
		<div className="container-fluid p-0">
			<HomeHeading />
			<HomeContent />
		</div>
	);
}

export default Home;
