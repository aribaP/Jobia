import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rectangle from '../assets/Rectangle.png'
import { Link } from 'react-router-dom'

const ResumeDisplay = ({id, onChangeStatus, onChangeTabs, onChangeAllJobs, onChangeAllJobsTabs}) => {

  const navigate = useNavigate();
	const initialvalues = {
		orgName: "",
		orgEmail: "",
		orgContactNumber: "",
		orgPassword: "",
		orgCPassword: ""

	};

	// const [formValues, setFormValues] = useState(setOrg);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [setOrg, setOrgDetails] = useState({});
	const [formValues, setFormValues] = useState(initialvalues);


	const postData = async (body) => {

		const data = {
			orgName: body.orgName,
			orgEmail: body.orgEmail,
			orgContactNumber: body.orgContactNumber,
			orgPassword: body.orgPassword
		};

		try {
			await axios.patch("http://localhost:5000/organization/2", data)
				.then((response) => {
					console.log("Data recieved");
					console.log(response.data);
					alert("Information saved.");
					window.location.reload();
				})

		} catch (err) {
			console.log(err);
		}

	};

	const getData = async () => {

		try {
			await axios.get(`http://localhost:5000/resume/getwhole/${id}`)
				.then((response) => {
					console.log("Data recieved");
					console.log(response.data);
					// console.log("orgSet", setOrg);
				})

		} catch (err) {
			console.log(err);
			
		}

	};

	useEffect(() => {
		console.log(id);
		getData();
		console.log(formErrors);
		if (isSubmit && Object.keys(formErrors).length === 0) {
			console.log("useeffect", setOrg);
			postData(formValues);
			console.log(formValues);  //Rectified values after validation
		}

	}, [formErrors]);



	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const regexphoneno = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;

		console.log("I am in validation");
		// if (!values.orgName) { errors.orgName = "Username is required!"; }
		if (!values.orgName) { }

		if (!values.orgEmail) { }
		else if (!regex.test(values.orgEmail)) { errors.orgEmail = "This is not a valid email format!"; }

		if (!values.orgContactNumber) { }
		else if (!regexphoneno.test(values.orgContactNumber)) { errors.orgContactNumber = "Invalid phonenumber!"; }

		if (!values.orgPassword && !values.orgCPassword) { }
		else if (values.orgCPassword != values.orgPassword) { errors.orgCPassword = "Password must be same as above."; }
		else if (!values.orgCPassword && values.orgPassword) { errors.orgCPassword = "Please reenter the password for confirmation."; }
		else if (values.orgCPassword && !values.orgPassword) { errors.orgPassword = "Enter the password before confirmation."; }
		else if (values.orgPassword.length < 7) { errors.orgPassword = "Password must be more than 7 characters"; }
		else if (values.orgPassword.length > 15) { errors.orgPassword = "Password cannot exceed more than 15 characters"; }

		// if (!validator.isStrongPassword(value, {
		//   minLength: 8, minLowercase: 1,
		//   minUppercase: 1, minNumbers: 1, minSymbols: 1
		// })) {
		//   errors.orgPassword = "Password must be strong";
		// }
		console.log('Errors', errors)
		return errors;
	};



  return (
    
    <div className='padding-20 resume-create-container'>
    <div style={{ backgroundColor:'gray', border: '4px solid #5B4F64', borderRadius: '20px', width: '100%' }}>
    <div className='resume'>
      <p style={{backgroundColor:'gray'}}>
        <div  className='btn2'><h1>Name:&emsp;</h1><h1>{setOrg.orgName}</h1><br/></div>
        <br></br> 
        <h6>email address</h6>
        <h6>LinkedIn: linkedin&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Github: github</h6><br/><br/>
        <h4>Objective</h4>objective<br/><br/>
        <h4>Work Experience</h4>work experience<br/><br/>
        <h4>Education</h4>education<br/><br/>
        <h4>Projects</h4>projects<br/><br/>
        <h4>Skills</h4>skills<br/><br/>
        <h4>Interests/Hobbies</h4>hobbies<br/><br/>
      </p>
    </div>
    </div>
  </div>
  )
}

export default ResumeDisplay