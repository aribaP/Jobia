import React from 'react'
import {useState} from 'react';
import validator from 'validator'
import '../Styles/style.css'
import PolygonRight from '../assets/PolygonRight.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
const Register2 = () => {
  const [errorMessage, setErrorMessage] = useState('')
 
  const validate = (value) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('')
    } else {
      setErrorMessage('Password is not strong')
    }
  }
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };
  return (
    <>
      <Header />
      <div className='body-Login'>
        <div className='width-30'>
          <h1 className='white-txt '>Welcome back to the best Job solution!</h1>
        </div>
        <div className='body-form-login'>
          <h5 className='mb-revert'>Sign In To Your Account</h5>
          <div class="mb-3">
            <input type="text" name='email' onChange={handleChange} class="form-control input-Fields" id="EmailAddress" placeholder="Email address" />
            {error && <h6 style={{color: 'red'}}>{error}</h6>}
          </div>
          <div class="mb-3">
            <input type="password" class="form-control input-Fields" id="Password" placeholder="Create password" />
          </div>
          <button className="btn body-button-style11" type="submit">Login</button>
        </div>
        <img className='polygonRight' src={PolygonRight} alt="" width="100" height="24" />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Register2