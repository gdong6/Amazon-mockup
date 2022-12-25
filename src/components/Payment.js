import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { Link, Navigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reducer';
import axios from 'axios';

function Payment() {
  const [{ shoppingCart, user}, dispatch] = useStateValue(); 

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(shoppingCart) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [shoppingCart])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmAcssDebitPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      Navigate('/orders', { replace: true });
    })
  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error? event.error.message : "");
  }
  
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          checkout (<Link to='/checkout'> {shoppingCart?.length} items</Link>)
        </h1>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>123 React Road</p>
            <p>Ithaca, NewYork</p>
          </div>
        </div>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review Items and delivery</h3>
          </div>
          <div className='payment-items'>
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

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment-priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total: <strong> {value} </strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(shoppingCart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing? <p>Processing</p> : <p>"Buy Now!</p>}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment