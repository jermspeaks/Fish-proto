import React, { Component } from 'react';
import Home from './Home/Home';
import Fish from './Fish/FishGeneralPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


class Root extends Component {
	render() {
		return (
			<Router basename='/Fish-proto'>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/fish" component={Fish} />
				</Switch>
			</Router>
		);
	}
}
export default Root;