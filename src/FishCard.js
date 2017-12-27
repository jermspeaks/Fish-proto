import React, { Component } from 'react';
import propTypes from 'prop-types';

class App extends Component {
	static PropTypes = {
		data: propTypes.object
	};

	render() {
		const { data } = this.props;
		return (
			<div className="fish-card">
				<header>
					<div>{data.name}</div>
				</header>
				<section></section>
			</div>
		);
	}
}

export default App;
