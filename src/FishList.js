import React, { Component } from 'react';
import propTypes from 'prop-types';
import FishCard from './FishCard';

class FishList extends Component {
	static PropTypes = {
		data: propTypes.arrayOf(propTypes.object)
	};

	render() {
		return (
			<div>
				<ul className="fish-list">
					{this.props.data.map((fish, index) => (
						<li index={index}>
							<FishCard data={fish} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default FishList;
