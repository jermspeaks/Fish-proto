import React, { Component } from 'react';
import propTypes from 'prop-types';
import './FishCard.css';
import statuses from './conservationStatuses.json';

class FishCard extends Component {
	static propTypes = {
		data: propTypes.object
	};

	static defaultProps = {
		data: {}
	};

	constructor(props) {
		super(props);

		this.state = {
			showMore: true,
			conservationStatus: statuses.find(status => status.symbol === props.data.conservationStatus)
		}
	}

	toggleSummary(toggle) {
		return () => this.setState({
			showMore: toggle
		});
	}

	render() {
		const { data } = this.props;
		return (
			<div className="fish-card">
				<header className="fish-card-header">
					<div className="fish-card-header-title">{data.name}</div>
				</header>
				<section className="fish-card-section">
					<div className="fish-card-conservation">
						<div className="fish-card-conservation-title">Conservation Status</div>
						<div className="fish-card-conservation-category">Category: {this.state.conservationStatus.category}</div>
						<div className="fish-card-conservation-rank">Rank: {this.state.conservationStatus.name}</div>
					</div>
				</section>
				<section className="fish-card-section">
					<img src={data.imageUrl} width="400" alt={data.name} />
				</section>
				<section className="fish-card-section">
					{this.state.showMore ? (
						<p>{data.shortAssessment}</p>
					) : data.summaryAssessment.split('\n').map((summary, index) => (
						<p key={index}>{summary}</p>
					))}
					<div>
						<button
							className="fish-card-summary-switch" 
							role="switch" 
							aria-checked={!this.state.showMore}
							onClick={() => this.toggleSummary(!this.state.showMore)()}
						>{this.state.showMore ? "Show More" : "Show Less"}</button>
					</div>
				</section>
			</div>
		);
	}
}

export default FishCard;