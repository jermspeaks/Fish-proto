import React, { Component } from 'react';
import './header.css';
import logo from '../Fish/fish.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="header-wrapper">
				<div className="header-section-left">
					<Link to="/">
						<img src={logo} alt="fish logo" width="30" />
					</Link>
				</div>	
				<div className="header-section-center">
					<h1 className="header-title">Fish App</h1>
				</div>
				<div className="header-section-right">
					{/*<img src={logo} alt="fish logo" width="30" />*/}
				</div>
			</header>
		);
	}
}

export default Header;
