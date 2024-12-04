/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import pieces from './Pieces';
import './Gallery.css';
import '../Extras/Heroes.css';
import '../../index.css';

function GalleryHeading() {
	return (
		<div>
			<div className="GalleryHero" />
			<div className="row">
				<div className="col-12 p-0 text-center">
					<h1 className="main-heading">Discover Our Craftsmanship</h1>
					<p className="xlg-paragraph lg-margin lg-padding">Here's some of my latest drawings and artwork!</p>
				</div>
			</div>
		</div>
	);
}

function GalleryDisplay() {
	const [display, setDisplay] = useState("none");
	const [alt, setAlt] = useState("");
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");

	const myStyle = {
		displays: {display}
	};

	const myImage = {
		alts: {alt},
		images: {image},
		titles: {title}
	};

	const clickOff = () => {
		setAlt("");
		setDisplay("none");
		setImage("");
		setTitle("");
	};

	const clickOn = (e) => {
		setAlt(`${  e.currentTarget.firstChild.alt}`);
		setDisplay("block");
		setImage(`${  e.currentTarget.id}`);
		setTitle(`${  e.currentTarget.title}`);
	};

	const galleryList = pieces.map((res) =>
		<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 gallery-column p-0" key={res.title}>
			<div className="d-inline-block gallery-link m-0" id={res.imageUrl} title={res.title} onClick={clickOn}>
				<img src={res.imageUrl} alt={res.alt} className="d-inline-block image-thumbnail mh-100 mw-100" />
			</div>
		</div>
	);

	return (
		<div>
			<div className="row text-center gallery-row">
				{galleryList}
			</div>
			<div className="gallery-overlay h-100 w-100" onClick={clickOff} style={myStyle.displays} />
			<div className="gallery-display" onClick={clickOff} style={myStyle.displays}>
				<div className="text-center">
					<img alt={myImage.alts.alt} className="d-block image-full mx-auto my-0" src={myImage.images.image} />
					<div className="gallery-text-box">
						<h1 className="gallery-text px-5 py-2 m-0 text-right">{myImage.titles.title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

function Gallery() {
	return (
		<div className="container-fluid p-0">
			<GalleryHeading />
			<GalleryDisplay />
		</div>
	);
}

export default Gallery;
