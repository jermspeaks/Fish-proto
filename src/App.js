import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FishList from './FishList';

class App extends Component {
  static defaultProps = {
    fishData: [
      {
        name: 'Small Fish'
      },
      {
        name: 'Big Fish'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <FishList data={this.props.fishData} />
        </section>
      </div>
    );
  }
}

export default App;
