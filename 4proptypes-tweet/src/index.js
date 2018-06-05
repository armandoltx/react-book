import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';


// class Avatar extends PureComponent {
//   render() {
//     return (
//       <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
//     );
//   }
// }
const Avatar = ({hash}) => {
  var url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <img
      src= {url} 
      className="avatar" 
      atl="avatar" />
  );
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
}
function Message({text}) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}


function NameWithHandle({author}) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.string.isRequired
}


const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

function Count({count}) {
  if(count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({count}) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number
}

const LikeButton = ({count}) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {count > 0 && 
        <span className="like-count">
          {count}
        </span>}
    </span>
  );
}

LikeButton.propTypes = {
  count: PropTypes.number
};

// other way to write the function

// const LikeButton = ({ count }) => (<span className="like-button">
//   <i className="fa fa-heart" />
//   <span className="like-count"> {count ? count : null}
//   </span>
// </span>
// );

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton  />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

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
}

ReactDOM.render(<Tweet tweet={testTweet}/>,
  document.querySelector('#root'));


export { Tweet, testTweet };   // for testing
