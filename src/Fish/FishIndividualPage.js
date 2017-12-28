import React, { Component } from 'react';
import propTypes from 'prop-types';
import './FishIndividualPage.css';

class FishIndividualPage extends Component {
	static propTypes = {
		match: propTypes.object
	};

	render() {
		const { match } = this.props;
		return (
			<div className="fish-individual-page">
				<header className="fish-individual-title">
					<h1>{match.params.fishId}</h1>
				</header>
				<div className="fish-individual-wrapper">
					<section>
						<h2>Sustainability</h2>
						<nav>
							<ul>
								<li>
									<a 
										className="fish-individual-nav-link"
										id="fish-individual-nav-link-overview"
										href={`http://www.seafoodwatch.org/seafood-recommendations/groups/${match.params.fishId.toLowerCase()}/overview`} 
										target="_blank"
									>Overview</a>
								</li>
								<li>
									<a 
										className="fish-individual-nav-link"
										id="fish-individual-nav-link-recommendations"
										href={`http://www.seafoodwatch.org/seafood-recommendations/groups/${match.params.fishId.toLowerCase()}`} 
										target="_blank"
									>Recommendations</a>
								</li>
							</ul>
						</nav>
					</section>
					<section>
						<h2>Recipes</h2>
					</section>
				</div>
			</div>
		);
	}
}

export default FishIndividualPage;
