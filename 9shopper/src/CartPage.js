import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const EmptyCart = () => {
  return (
    <div className="CartPage-empty">
      <h2>Your Cart is Emty.</h2>
      <h3>Add some products.</h3>
    </div>
  );
}

const CartPage = ({ items, onAddOne, onRemoveOne }) => {
  return (
    items.length === 0 ? <EmptyCart /> :
      <ul className="CartPage-items">
        {items.map(item =>
          <li key={item.id} className="CartPage-item">
            <Item item={item}>
              <div className="CartItem-controls">
                <button
                  className="CartItem-removeOne"
                  onClick={() => onRemoveOne(item)}>&ndash;</button>
                <span className="CartItem-count">{item.count}</span>
                <button
                  className="CartItem-addOne"
                  onClick={() => onAddOne(item)}>+</button>
              </div>
            </Item>
          </li>
        )}
        <li className="CartTotal">
          Total: ${items.reduce((sum, item) => sum + (item.price * item.count), 0)}
        </li>
      </ul>
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;