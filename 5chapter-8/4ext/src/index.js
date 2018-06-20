import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

function Poster({posterInfo}) {
  const {image, title, caption} = posterInfo
  return(
    <div className="poster">
      <div className="image-container">
        <img class="img" src={image} alt="React"></img>
      </div>
      <h1 className="name">
        <span className="first-letter">{title.slice(0, 1)}</span>
        <span className="rest-letter">{title.substring(1, title.length -1)}</span>
        <span className="last-letter">{title.slice(4, 5)}</span>
      </h1>
      <h3>{caption}</h3>
    </div>
  );
}

Poster.propTypes = {
  posterInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired
}

const info = {
  image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
  title: "REACT",
  caption: "The best thing since JQuery, probably."
}



ReactDOM.render(<Poster posterInfo={info} />, document.getElementById('root'));
registerServiceWorker();
