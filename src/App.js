import React, { Component } from 'react';

import Header from './components/Header';

class App extends Component {
  render() {
    this.title = 'HELLO WORLD!!!';
    return (
      <Header title={this.title} />
    );
  }
}

export default App;
