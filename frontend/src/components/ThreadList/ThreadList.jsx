import React, { Component } from 'react';
import Thread from 'Thread';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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