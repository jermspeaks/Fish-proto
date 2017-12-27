import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FishList from './FishList';
import fishData from './fish.json';

class App extends Component {
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

export default App;
