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
    <div className='body-resume'>
	<div className='resume-display'>
		<div className='resume-display-left'>
			<div className='profileText'>
				<h2>Muhammad Sabir<br></br><span>Web Developer</span></h2>
			</div>
			<div className='contactInfo'>
				<h3 className='resume-title'>Contact Info</h3>
				<ul>
					<li>
						<span className='resume-icon'><i class="fa fa-phone" aria-hidden="true"></i></span>
						<span className='resume-text'>+92 302 2079971</span>
					</li>
					<li>
						<span className='resume-icon'><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
						<span className='resume-text'>muhammadsabir.1601139@gmail.com</span>
					</li>
					<li>
						<span className='resume-icon'><i class="fa fa-globe" aria-hidden="true"></i></span>
						<span className='resume-text'>www.sabir.com</span>
					</li>
					<li>
						<span className='resume-icon'><i class="fa fa-linkedin" aria-hidden="true"></i></span>
						<span className='resume-text'>www.linked.com</span>
					</li>
					<li>
						<span className='resume-icon'><i class="fa fa-map-marker" aria-hidden="true"></i></span>
						<span className='resume-text'>Karachi, Sindh, Pakistan</span>
					</li>
				</ul>
			</div>

			<div className='contactInfo education'>
				<h3 className='resume-title'>Education</h3>
				<ul>
					<li>
						<h5>2018 - 2022</h5>
						<h4>Bachelors in Computer Science</h4>
						<h4>National University of Computer and Emerging Sciences</h4>
					</li>
					<li>
						<h5>2016 - 2018</h5>
						<h4>Pre Engineering</h4>
						<h4>The Citizens Foundation College</h4>
					</li>
					<li>
						<h5>2014 - 2016</h5>
						<h4>Matric</h4>
						<h4>The Citizens Foundation School</h4>
					</li>
				</ul>
			</div>

			<div className='contactInfo language'>
				<h3 className='resume-title'>Languages</h3>
				<ul>
					<li>
						<span className='resume-text'>English</span>
					</li>
					<li>
						<span className='resume-text'>Urdu</span>
					</li>
					<li>
						<span className='resume-text'>Sindhi</span>
					</li>
				</ul>
			</div>
		</div>

		<div className='resume-display-right'>
			<div className='about'>
				<h2 className='title2'>Objective</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div className='about'>
				<h2 className='title2'>Experience</h2>
				<div className='box'>
					<div className='yearCompany'>
						<h5>Year of Experience</h5>
						<h5>Company Name</h5>
					</div>
					<div className='resume-text'>
						<h4>Description</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
					</div>
				</div>

				<div className='box'>
					<div className='yearCompany'>
						<h5>Year of Experience</h5>
						<h5>Company Name</h5>
					</div>
					<div className='resume-text'>
						<h4>Description</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
					</div>
				</div>
			</div>

			<div className='about'>
				<h2 className='title2'>Projects</h2>
				<div className='box'>
					<div className='yearCompany'>
						<h5>Project Title</h5>
					</div>
					<div className='resume-text'>
						<h4>Description</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
					</div>
				</div>

				<div className='box'>
					<div className='yearCompany'>
						<h5>Project Title</h5>
					</div>
					<div className='resume-text'>
						<h4>Description</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
					</div>
				</div>
			</div>

			<div className='about skills'>
				<h2 className='title2'>Skills</h2>
				<div className='box'>
					<h4>HTML</h4>
				</div>
				<div className='box'>
					<h4>CSS</h4>
				</div>
				<div className='box'>
					<h4>JavaScript</h4>
				</div>
				<div className='box'>
					<h4>React JS</h4>
				</div>
			</div>
		</div>
	</div>
	</div>
  )
}

export default ResumeDisplay