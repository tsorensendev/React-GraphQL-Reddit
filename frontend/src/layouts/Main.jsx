import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Main;
