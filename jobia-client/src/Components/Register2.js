import React from 'react'
import '../Styles/style.css'
import {useState} from 'react';
import validator from 'validator'
import polygon from '../assets/Polygon.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
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
			<div className='body'>
				<h4 className='white-txt font-28 mb-revert '>READY TO JOIN THE BEST JOB SOLUTION ?</h4>
				<div className='body-form-register2'>
					<h5 className='mb-revert text-center'>Sign up for a free account</h5>
					<div class="row mb-3">
						<div class="col">
							<input type="text" class="form-control input-Fields" placeholder="First name" aria-label="First name" />
						</div>
						<div class="col">
							<input type="text" class="form-control input-Fields" placeholder="Last name" aria-label="Last name" />
						</div>
					</div>
					<div class="mb-3">
						<input type="text" name='email' onChange={handleChange} class="form-control input-Fields" id="EmailAddress" placeholder="Email address" />
						{error && <h6 style={{color: 'red'}}>{error}</h6>}
					</div>
					<div class="mb-3">
						<input type="password" onChange={(e) => validate(e.target.value)} class="form-control input-Fields" id="Password" placeholder="Create password" />
						{errorMessage === '' ? null : <span style={{ fontWeight: 'bold', color: 'red', }}>{errorMessage}</span>}
					</div>
					<Link to='/account'><button className="btn body-button-style11" type="submit">Register</button></Link>
				</div>
				<img className='polygon' src={polygon} alt="" />
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default Register2