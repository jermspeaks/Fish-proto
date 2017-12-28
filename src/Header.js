import React, { Component } from 'react';
import './header.css';
import logo from './fish.svg';

class Header extends Component {
	render() {
		return (
			<header className="header-wrapper">
				<div className="header-section-left">
					<img src={logo} alt="fish logo" width="30" />
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
