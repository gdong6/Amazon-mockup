import './App.css';
import { Header, Home, Checkout, Login, Payment } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51MJ0GZIkYnUjsx6O8ZkYhDIVS3agJi7FhIPz8gW42UruNUKoTFJIpbXBaco8Zfz2yToCl7e8YFwr5JUzTQg8e9Jy00ynVxEQGy');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //userlogged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={[ <Header/>, <Home/>]}
          />
          <Route 
            path="/checkout"
            element={[ <Header/>, <Checkout/>]}
          />
          <Route 
            path='/login'
            element={[ <Login/> ]}
          />
          <Route 
            path='/payment'
            element={[ <Header/>, <Elements stripe={promise}><Payment/></Elements>]}
          />
        
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
