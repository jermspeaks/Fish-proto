import React, { Component } from 'react';
import propTypes from 'prop-types';
import FishCard from './FishCard';
import './FishList.css';

class FishList extends Component {
	static propTypes = {
		data: propTypes.arrayOf(propTypes.object)
	};

	render() {
		return (
			<div className="fish-container">
				<ul className="fish-list">
					{this.props.data.map((fish, index) => (
						<li key={index}>
							<FishCard data={fish} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default FishList;
