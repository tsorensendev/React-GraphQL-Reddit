import React, { Component } from 'react';
import Thread from './Thread';
import threads from './threads.json';

class ThreadList extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: threads,
    };
  }

  render() {
    const { dataSet } = this.state;
    return (
      <div>
        {dataSet.map(data => (
          <Thread
            title={data.title}
            link={data.link}
            sub={data.sub}
            poster={data.poster}
            votes={data.votes}
            thumbnail={data.thumbnail}
            timePosted={data.timePosted}
            commentCount={data.commentCount}
            key={data.title}
          />
        ))
      }
      </div>
    );
  }
}

export default ThreadList;
