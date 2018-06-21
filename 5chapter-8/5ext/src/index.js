import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';


function Email ({singleLine}) {
  const { sender, subject, date, message } = singleLine;
  return (
    <div className="single-line">
      <div className="header">
        <input type="checkbox" className="click" />
        <span className="sender">{sender}</span>
        <span className="subject">{subject}</span>
        <span className="date">{date}</span>
      </div>
      <div className="body">
        <span className="message">{message}</span>
      </div>
    </div>
  );
}

Email.propTypes = {
  singleLine: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
}

const info = {
  sender: "React Newsletter",
  subject: "React Newsletter - Issue 36",
  date: "Jul 15",
  message: "React Newsletter Issue 36 - July 15th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme" 
}

ReactDOM.render(<Email singleLine = {info} />, document.getElementById('root'));
registerServiceWorker();