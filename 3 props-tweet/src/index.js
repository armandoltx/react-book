import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Avatar extends PureComponent {
//   render() {
//     return (
//       <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
//     );
//   }
// }
const Avatar = (props) => {
  return (
    <img src="https://www.gravatar.com/avatar/${props.hash}" className="avatar" atl="avatar" />
  );
}

function Message() {
  return (
    <div className="message">This is less than 140 characters.</div>
  );
}


function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
);

const LikeButton = () => {
  return (
    <i className="fa fa-heart like-button" />
  );
} // other way to write the functions

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet() {
  return (
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

ReactDOM.render(<Tweet />, document.getElementById('root'));