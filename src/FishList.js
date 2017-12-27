import React, { Component } from 'react';
import propTypes from 'prop-types';
import FishCard from './FishCard';
import './FishList.css';
import throttle from 'lodash/throttle';

class FishList extends Component {
	static propTypes = {
		data: propTypes.arrayOf(propTypes.object)
	};

	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			data: props.data
		}
	}

	onInputChange(evt) {
		const nextValue = evt.target.value;
		var nextData;

		if (nextValue === '') {
			nextData = this.props.data;
		} else {
			nextData = this.props.data.filter(entry => entry.name.toLowerCase().indexOf(nextValue.toLowerCase()) > -1);
		}

		this.setState({ 
			inputValue: nextValue,
			data: nextData
		});
	}

	render() {
		return (
			<div className="fish-container">
				<div>
					<input type="text" value={this.state.inputValue} onChange={throttle(this.onInputChange.bind(this), 200)}/>
				</div>
				<div>
					<ul className="fish-list">
						{this.state.data.map((fish, index) => (
							<li key={index}>
								<FishCard data={fish} />
							</li>
						))}
					</ul>	
				</div>
			</div>
		);
	}
}

export default FishList;
