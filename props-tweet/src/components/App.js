import React, { Component } from 'react';
import Tweet from './Tweet';

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tweet tweet={testTweet} />
      </div>
    );
  }
}

export default App;
