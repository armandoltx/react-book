import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';


const New = ({ list }) => {
  return (
    <li className="li-list">
      <div className="principal">
        <span className="title"> {list.title}</span><span className="link">({list.link})</span>
      </div>
      <div className="secundary">
        <span className="points">{list.points} points</span>
        <span className="by">by {list.by}</span>
        <span className="time">11 hours ago</span> |
            <span>flag</span> | <span>hide</span>  | <span className="comments">{list.comments} comments</span> | instapaper | save to pocket
          </div>
    </li>
  );
}
New.propTypes = {
  list: PropTypes.object.isRequired
};

const News = ({ lists }) => {
  return (
    <div className="news">
      <ol className="ol-list">
        {lists.map(list => (<New key={list.id} list={list} />))}
      </ol>
    </div>
  );
}

News.propTypes = {
  lists: PropTypes.array.isRequired
};

const storyLists = [
  {
    id: 0,
    title: "Why I'm Suing the US Goverment",
    link: "bunniestudios.com",
    points: 1346,
    by: "Ivank",
    comments: 257
  },
  {
    id: 1,
    title: "Zenzizenzizenzic",
    link: "wikipedia.org",
    points: 140,
    by: "vinchuco",
    comments: 40
  },
  {
    id: 2,
    title: "A practial security guide for web developers",
    link: "github.com",
    points: 72,
    by: "zianwar",
    comments: 6
  },
  {
    id: 3,
    title: "I got arrested in Kazakhsstan and reprensented myself in court",
    link: "medium.com",
    points: 370,
    by: "drppr",
    comments: 79
  },
  {
    id: 4,
    title: "Scultpture of Houseing Prices Ripping San Feancisco Apart",
    link: "dougmccune.com",
    points: 254,
    by: "dougmccune",
    comments: 149
  }


]
ReactDOM.render(<News lists={storyLists}/>, document.getElementById('root'));
registerServiceWorker();
