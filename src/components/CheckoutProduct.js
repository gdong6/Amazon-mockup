import React from 'react'
import { useStateValue } from '../StateProvider';
import '../styles/CheckoutProduct.css'

function CheckoutProduct({ id, imgUrl, title, price, rating }) {
  const [{shoppingCart}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }
  return (
    <div className='checkoutProduct'>
      <img 
        className='checkoutProduct-image'
        src={ imgUrl }
        alt='checkoutProduct'
      />

      <div className='checkoutProduct-info'>
        <p className='checkoutproduct-title'>
          { title }
        </p>
        <p className='checkoutProduct-price'>
          <small>$</small> 
          <strong>{ price }</strong>
        </p>
        <div className='checkoutProduct-rating'>
          {Array(rating).fill().map((_,i) => (
            <p>⭐️</p>
          ))}
        </div>
        <button onClick={removeFromCart}> Delete </button>
      </div>
    </div>
  )
}

export default CheckoutProduct