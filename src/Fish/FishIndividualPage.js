import React, { Component } from 'react';
import propTypes from 'prop-types';

class FishIndividualPage extends Component {
	static propTypes = {
		match: propTypes.object
	};

	render() {
		const { match } = this.props;
		return (
			<div className="fish-page">
				<header>Name: {match.params.fishId}</header>
			</div>
		);
	}
}

export default FishIndividualPage;
