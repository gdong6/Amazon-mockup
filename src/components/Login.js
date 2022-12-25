import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();

  const signIn = e => {
    e.preventDefault()
    //firebase login here 
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
    //firebase register here 
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if(auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/440px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login-container'>
        <h1> Sign-in </h1>

        <form>
          <h5> E-mail </h5>
          <input 
            type='text' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <h5> Password </h5>
          <input 
            type='password'
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />

          <button 
            className='login-signInButton'
            type='submit'
            onClick={signIn}
          > 
            Sign in 
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Fake CLONE Conditions of Use and Privacy Notice.
        </p>

        <button 
          className='login-registerButton'
          onClick={register}
        > 
          Create your Amazon Account 
        </button>
      </div>
    </div>
  )
}

export default Login