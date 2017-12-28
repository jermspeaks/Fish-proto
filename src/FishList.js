import React, { Component } from 'react';
import propTypes from 'prop-types';
import FishCard from './FishCard';
import './FishList.css';
import throttle from 'lodash/throttle';
import classnames from 'classnames';

class FishList extends Component {
	static propTypes = {
		data: propTypes.arrayOf(propTypes.object)
	};

	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			data: props.data,
			selectedLetter: ''
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
			data: nextData,
			selectedLetter: ''
		});
	}

	selectLetter(letter) {
		this.setState({
			inputValue: '',
			data: this.props.data.filter(entry => entry.name[0].toLowerCase() === letter.toLowerCase()),
			selectedLetter: letter
		});
	}

	render() {
		return (
			<div className="fish-container">
				<div className="fish-filter">
					<input 
						className="fish-filter-input" 
						type="text" 
						value={this.state.inputValue} 
						onChange={throttle(this.onInputChange.bind(this), 200)}
						placeholder="Filter Fish"
					/>
				</div>
				<div className="fish-results">
					<div className="fish-list-container">
						<ul className="fish-list">
							{this.state.data.map((fish, index) => (
								<li key={index} className="fish-list-item">
									<FishCard data={fish} />
								</li>
							))}
						</ul>
					</div>
					<div className="fish-alphabet-filter">
						<ul className="fish-alphabet-filter-list">
							{'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => {
								const isSelected = this.state.selectedLetter === letter;
								const letterContainerClassName = classnames('fish-alphabet-filter-box', {
									'fish-alphabet-filter-box--selected': isSelected
								});
								return (
									<li key={index}>
										<div className={letterContainerClassName} onClick={() => this.selectLetter(letter)}>{letter}</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default FishList;
