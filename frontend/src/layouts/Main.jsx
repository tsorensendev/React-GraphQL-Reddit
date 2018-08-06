import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Test from '../components/Navbar/Test';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Test />
      </div>
    );
  }
}

export default Main;
