import React from 'react'
import '../Styles/style.css'
import {useState,useEffect} from 'react';
import validator from 'validator'
import polygon from '../assets/Polygon.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
const Register = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <>
      <Header />
      <div className='body'>
          <h4 className='white-txt font-28 mb-revert '>READY TO JOIN THE BEST JOB HIRING SOLUTION ?</h4>
          <div className='body-form-register'>
          <form onSubmit={handleSubmit}>
            <h5 className='mb-revert text-center'>Sign up for a free account</h5>
            <div class="mb-3">
              <input type="username" value={formValues.username} onChange={handleChange} name="username" class="form-control input-Fields" id="OrganizationName" placeholder="Organization name" />
              <p className='error'>{formErrors.username}</p>
            </div>
            <div class="mb-3">
              <input type="email" name='email' value={formValues.email} onChange={handleChange} class="form-control input-Fields" id="EmailAddress" placeholder="Email address" />
              <p className='error'>{formErrors.email}</p>
            </div>
            <div class="mb-3">
              <input type="password" name='password' value={formValues.password} onChange={handleChange} class="form-control input-Fields" id="Password" placeholder="Create password" />
              <p className='error'>{formErrors.password}</p>
            </div>
          <Link to='/organization'><button className="btn body-button-style11" type="submit" >Register</button></Link>
          </form>
          </div>
          <img className='polygon' src={polygon} alt="" />
      </div><footer>
      <Footer /></footer>
    </>
  )
}

export default Register