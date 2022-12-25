import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer';
import { Link, useNavigate } from 'react-router-dom'

function Subtotal() {
  const [{shoppingCart}, dispatch] = useStateValue();
  //const total = shoppingCart.map(i=>i.price).reduce((a,b)=>a+b);

  const navigate = useNavigate ();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {shoppingCart?.length} items): <strong> {value} </strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox'/>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(shoppingCart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => navigate('/payment')}> Proceed to checkout </button>
    </div>
  )
}

export default Subtotal