import React, { Component } from 'react';
import './Home.css';
import Header from '../Common/Header';
import FishList from '../Fish/FishList';
import fishData from '../data/monterey-fish.json';

class Home extends Component {
  static defaultProps = {
    fishData: fishData
  };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-container">
          <FishList data={this.props.fishData} />
        </section>
      </div>
    );
  }
}

export default Home;
