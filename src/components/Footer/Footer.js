import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

	return(
		<div className="row m-0 text-center">
			<div className="col-12 p-0">
				<p className="footer m-0">
					<Link to ="/" className="footLink">caerwynscreations.com | © <span>{(new Date().getFullYear())}</span></Link>
				</p>
			</div>
		</div>
	);
}

export default Footer;
