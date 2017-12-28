import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Route } from 'react-router-dom';
import FishIndividualPage from './FishIndividualPage';
import Header from '../Common/Header';

class FishGeneralPage extends Component {
	static propTypes = {
		match: propTypes.object
	};

	render() {
		const { match } = this.props;
		return (
			<div className="App">
        		<Header />
				<Route path={`${match.url}/:fishId`} component={FishIndividualPage}/>
			</div>
		);
	}
}

export default FishGeneralPage;
