import React from 'react'
import '../styles/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider';

function Checkout() {
  const [{shoppingCart, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img 
          className='checkout-ad'
          src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/logos/OG_image_Squid_Ink.png'
          alt='cart ad'
        />

        <div>
          <h2 className='checkout-title'>
            Shopping cart
          </h2>

          {shoppingCart.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
        </div>
      </div>
      
      <div className='checkout-right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout