import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import registerServiceWorker from './registerServiceWorker';

const HeaderList = ({ list }) => {
  return (
    <span>{list.title}</span>
  );
}

const BoardList = ({ card }) => {
  return (
    <li className="li-list">{card.title}</li>
  );
}

const FileList = ({ list }) => {
  return(
    <div className="exterior">
      <h2 className="title">
        <HeaderList list={list} />
      </h2>
      <ul className="ul-list">
        {list.cards.map(card => (
          <BoardList key={card.id} card={card} />
        ))}
        <button>Add a card...</button>
      </ul>
    </div>
  );
}

const Board = ({ lists }) => {
  return (
    <div className="Board">
      {lists.map(list => (
        < FileList key={list.id} list={list} />
      ))}
    </div>
  );
}


const testLists = [
  {
    id: 0,
    title: 'Phone Features',
    cards: [
      {
        id: 0,
        title: 'Subwoofer'
      },
      {
        id: 1,
        title: 'Non-porous, wahsable'
      },
      {
        id: 2,
        title: 'Wings'
      },
      {
        id: 3,
        title: 'Beveled Bezel'
      },
      {
        id: 4,
        title: 'Bezeled Bevel'
      },
      {
        id: 5,
        title: 'Seedless'
      }
    ]
  },
  {
    id: 1,
    title: 'Phone Features1',
    cards: [
      {
        id: 0,
        title: 'Subwoofer1'
      },
      {
        id: 1,
        title: 'Non-porous, wahsable1'
      },
      {
        id: 2,
        title: 'Wings1'
      },
      {
        id: 3,
        title: 'Beveled Bezel1'
      },
      {
        id: 4,
        title: 'Bezeled Bevel1'
      },
      {
        id: 5,
        title: 'Seedless1'
      }
    ]
  },
  {

    id: 2,
    title: 'Phone Features2',
    cards: [
      {
        id: 0,
        title: 'Subwoofer2'
      },
      {
        id: 1,
        title: 'Non-porous, wahsable2'
      },
      {
        id: 2,
        title: 'Wings2'
      },
      {
        id: 3,
        title: 'Beveled Bezel2'
      },
      {
        id: 4,
        title: 'Bezeled Bevel2'
      },
      {
        id: 5,
        title: 'Seedless2'
      }
    ]
  }
]

ReactDOM.render(<Board lists={testLists}/>, document.getElementById('root'));
registerServiceWorker();
