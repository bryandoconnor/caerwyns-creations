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
				<p className="xlg-paragraph lg-margin lg-padding">Home of my latest creative endeavors! I'm always making something new and I want others to enjoy the things I come up with.</p>
				<p className="xlg-paragraph lg-margin lg-padding">I started this site to help spread some of my coolest ideas across the globe. I hope you enjoy your time at my online store!</p>
			</div>
		</div>
	);
}

function HomeContent() {
	return(
		<div>
			<div className="text-center">
				<Link to="/products">
					<button className="lg-button lg-margin lg-padding main-button">Order Something Creative</button>
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
