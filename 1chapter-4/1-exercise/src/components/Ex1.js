import React, { PureComponent } from 'react';

class ex1 extends PureComponent {
  render () {
    return (
      <div className="book">
        <div className="title">The Title</div>
        <div className='author'>The Author</div>
        <ul clasName='stats'>
          <li className='rating'>5 stars</li>
          <li className='isbn'>12-345678-910</li>
        </ul>
        <div>
          New Line
          Test
        </div>
        <div>
          Empty

          Lines

          here
        </div>
        <div>
          &nbsp;Non-breaking
          &nbsp;Spaces&nbsp;
        </div>
        <div>
          Line1
          {' '}
          Line2
        </div>
      </div>
    );
  }
   
}


export default ex1;