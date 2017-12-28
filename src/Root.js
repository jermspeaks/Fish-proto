import React, { Component } from 'react';
import Home from './Home/Home';
import Fish from './Fish/FishGeneralPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class Root extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/fish" component={Fish} />
				</div>
			</Router>
		);
	}
}
export default Root;