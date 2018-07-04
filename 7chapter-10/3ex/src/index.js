import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Tweet from './Tweet';



const TweetList = ({tweets}) => {
  return (
    <div>
      {tweets.map(tweet => (
        <div key= {tweet.id} style={{ marginBottom: 20 }}>
          <Tweet tweet= {tweet} />
        </div>
      ))}
    </div>
  );
}
      
      
var testTweets = [
  {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
      handle: "catperson",
      name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
  },
  {
    message: "Something about dogs.",
    gravatar: "zzz",
    author: {
      handle: "dogerson",
      name: "IAMA Dog Person"
  },
    likes: 3,
    retweets: 2,
    timestamp: "2016-07-30 21:24:37"
  },
  {
    message: "Something about motos.",
    gravatar: "xyz",
    author: {
      handle: "motoperson",
      name: "IAMA motot Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
  }
]
 
ReactDOM.render(<TweetList tweets={testTweets}/>,
  document.querySelector('#root'));