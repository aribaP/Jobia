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

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {

      postData(formValues);
      console.log(formValues);  //Rectified values after validation
    }
  }, [formErrors]);



  const validate = (values) => {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    console.log("I am in validation");
    if (!values.candName) 
      {errors.candName = "Username is required!";}

    if (!values.candEmail) 
      {errors.candEmail = "Email is required!";}
    else if (!regex.test(values.candEmail)) 
      {errors.candEmail = "This is not a valid email format!";}

    if (!values.candPassword) 
      {errors.candPassword = "Password is required";}
    else if (values.candPassword.length < 7) 
      {errors.candPassword = "Password must be more than 4 characters";}
    else if (values.candPassword.length > 15) 
      {errors.candPassword = "Password cannot exceed more than 10 characters";}
    

    // if (!validator.isStrongPassword(value, {
    //   minLength: 8, minLowercase: 1,
    //   minUppercase: 1, minNumbers: 1, minSymbols: 1
    // })) {
    //   errors.candPassword = "Password must be strong";
    // }
    console.log('Errors', errors)
    return errors;
  };

	return (
		<>
			<Header />
			<div className='body'>
				<h4 className='white-txt font-28 mb-revert '>READY TO JOIN THE BEST JOB SOLUTION ?</h4>
				<div className='body-form-register2'>
					<h5 className='mb-revert text-center'>Sign up for a free account</h5>
					<div class="row mb-3">
						<div class="mb-3">
							<input type="text" name="candName" class="form-control input-Fields" id="candName" required placeholder="Full name"
								value={formValues.candName}
								onChange={handleChange} />
							<div className="formErrors text-danger">
								<p>{formErrors.candName}</p>
							</div>
						</div>



						<div class="mb-3">
							<input type="email" name="candEmail" class="form-control input-Fields" id="candEmail" required placeholder="Email address"
								value={formValues.candEmail}
								onChange={handleChange} />
							<div className="formErrors text-danger">
								<p>{formErrors.candEmail}</p>
							</div>

						</div>

						<div class="mb-3">
							<input type="password" name="candPassword" class="form-control input-Fields" id="candPassword" required placeholder="Create password"
								value={formValues.candPassword}
								onChange={handleChange} />
							<div className="formErrors text-danger">
								<p>{formErrors.candPassword}</p>
							</div>
						</div>
					</div>
					<div>
						<button className="btn body-button-style11" type="submit" onClick={handleSubmit}>Register</button>
					</div>
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