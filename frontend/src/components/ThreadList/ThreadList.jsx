import React, { Component } from 'react';
import Thread from 'Thread';

class ThreadList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Thread />
      </div>
    );
  }
}

export default ThreadList;