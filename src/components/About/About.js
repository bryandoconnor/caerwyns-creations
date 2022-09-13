/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../Extras/Heroes.css';
import '../../index.css';

function AboutHeading() {
	return (
		<div>
			<div className="AboutHero" />
			<div className="row text-center">
				<div className="col-12 p-0 text-center">
					<h1 className="main-heading">About Me</h1>
					<p className="xlg-paragraph lg-margin lg-padding">My name is Caerwyn and this is my online store! Although I'm just a kid, I wanted to make things that others would enjoy and use.</p>
					<p className="xlg-paragraph lg-margin lg-padding">As a young entrepreneur, I love meeting people and I started this store so that I could learn about having my own business and work with my friends!</p>
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className="container-fluid p-0">
			<AboutHeading />
		</div>
	);
}

export default About;
