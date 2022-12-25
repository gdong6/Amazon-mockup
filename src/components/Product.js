import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Product.css'

function Product({ id, title, imgUrl, price, rating }) {
  const [{shoppingCart}, dispatch] = useStateValue();

  // console.log("This is the cart" , shoppingCart)

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        imgUrl: imgUrl,
        price: price,
        rating: rating
      }
    })
  };

  return (
    <div className='product' >
      <div className='product-info' >
        <p> { title } </p>
        <div className='product-rating' >
          {Array(rating).fill().map((_,i) => (
            <p >⭐️</p>
          ))}
        </div>
        <p >
          <small >$</small>
          <strong > { price } </strong>
        </p>
      </div>

      <img
        src={ imgUrl }
        alt='product'
      />
      <button onClick={addToCart}> Add to cart</button>
    </div>
  )
};

export default Product