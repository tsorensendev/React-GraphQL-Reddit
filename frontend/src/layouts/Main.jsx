import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Main;
