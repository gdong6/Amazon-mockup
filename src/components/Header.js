import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

const Header = () => {
  const [{shoppingCart, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <img 
          className='header-logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon icon'
        />
      </Link>
      
      <div className='header-search'>
        <input className='header-search-input' type="text" /> 
        <SearchIcon className='header-search-icon'/>
      </div>

      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-option1'>
            🇺🇸
          </span>
          <span className='header-option2'>
            EN
          </span>
        </div>
        <Link to={!user && "/login"}>
          <div className='header-option' 
            onClick={handleAuthentication}>
            <span className='header-option1'>
              {user? `Hello, ${user.email}`: 'Hello, sign in'}
            </span>
            <span className='header-option2'>
              Account & Lists
            </span>
          </div>
        </Link>
        
        <div className='header-option'>
          <span className='header-option1'>
            Return
          </span>
          <span className='header-option2'>
            & Orders
          </span>
        </div>
        <Link to="/checkout">
          <div className='header-option-cart'>
            <ShoppingCartIcon/>
            <span className='header-option-cart-count header-option2'>
              { shoppingCart?.length }
            </span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header