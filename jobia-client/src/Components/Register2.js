// candidate registration

import React, { useEffect } from 'react'
import '../Styles/style.css'
import { useState } from 'react';
import validator from 'validator'
import polygon from '../assets/Polygon.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register2 = () => {
	const navigate = useNavigate();
  const initialvalues = {
    candName: "",
    candEmail: "",
    candPassword: "",
  };

  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormValues({ ...formValues, [name]: value }); //...=>spread operator
    console.log("form values", formValues);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  };
  const postData = async (body) => {

    console.log("boduuuu", body);

    try {
      await axios.post("http://localhost:5000/candidate/signupCand", body)
        .then((response) => {
          console.log("Data recieved");
          console.log(response.data);
          const results = response.data;
          navigate('/account', { replace: true });
        })

    } catch (err) {
      console.log(err);
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