import React, { PureComponent } from 'react';

class Avatar extends PureComponent {
  render() {
    return (
      <img
        src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar"
      />
    );
  }
}

class NameWithHandle extends PureComponent {
  render() {
    return(
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
}

class Message extends PureComponent {
  render() {
    return(
      <div className="message">This message has les than 40 characters.</div>
    );
  }
}

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => {
  return (
    <i className="fa fa-heart like-button" />
  );
} // other way to write the functions

const MoreOptionsButton =() => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

class Tweet extends PureComponent {
  render() {
    return(
      <div className="tweet">
        <Avatar />
        <div className="content">
          <NameWithHandle />
          <Message />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />

          </div>
        </div>
      </div>
    );
  }
}
export default Tweet;