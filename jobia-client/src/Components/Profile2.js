import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profilee from '../assets/Profile.png';
import Edit from '../assets/edit.png';

const Profile2 = () => {

	const navigate = useNavigate();
	const initialvalues = {
		orgName: "",
		orgEmail: "",
		orgContactNumber: ""

	};

	// const [formValues, setFormValues] = useState(setOrg);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [setOrg, setOrgDetails] = useState({});
	const [formValues, setFormValues] = useState(initialvalues);

	let name, value;
	const handleChange = (e) => {
		name = e.target.name;
		value = e.target.value;
		setFormValues({ ...formValues, [name]: value }); //...=>spread operator
		console.log("form values", formValues);

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
		setFormErrors(validate(formValues));

		console.log("Done", formValues.orgEmail);
		if (isSubmit && Object.keys(formErrors).length === 0) {
			console.log("useeffect", setOrg);
			postData(formValues);
			console.log(formValues);  //Rectified values after validation
		}
		console.log(formValues);
	};


	const postData = async (body) => {
		console.log("Body", body);
		try {
			await axios.patch("http://localhost:5000/organization/2", body)
				.then((response) => {
					console.log("Data recieved");
					console.log(response.data);
					const results = response.data;
					console.log("Oyeee", response.data);
					// navigate('/profile2', { replace: true });
				})

		} catch (err) {
			console.log(err);
		}

	};

	const getData = async () => {

		try {
			await axios.get("http://localhost:5000/organization/2")
				.then((response) => {
					console.log("Data recieved");
					setOrgDetails(response.data);
					console.log("orgSet", setOrg);

					// result = response.data;
				})

		} catch (err) {
			console.log(err);
		}

	};

	useEffect(() => {
		getData();
		console.log(formErrors);

	}, [formErrors]);



	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const regexphoneno = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;

		console.log("I am in validation");
		if (!values.orgName) { errors.orgName = "Username is required!"; }

		if (!values.orgEmail) { errors.orgEmail = "Email is required!"; }
		else if (!regex.test(values.orgEmail)) { errors.orgEmail = "This is not a valid email format!"; }

		if (!values.orgContactNumber) { errors.orgContactNumber = "Phone number is required!"; }
		else if (!regexphoneno.test(values.orgContactNumber)) { errors.orgContactNumber = "Invalid phonenumber!"; }

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

		<div style={{ padding: "30px" }}>
			<div class="row">
				<div class="col-3 profile-body-left">
					<div className="profile-body-left-header">
						<img src={Profilee} width="150px" height="150px" />
						<Link to="/login">
							<button
								className="btn btn-outline-secondary mt-15 padding-l-15 padding-r-15"
								type="submit"
							>
								Change Avatar
							</button>
						</Link>
					</div>
					<div style={{ textAlign: "center" }}>
						<Link to="/register2">
							<h6>Change Password</h6>
						</Link>
						<Link to="/contact-us">
							<h6>Delete Account</h6>
						</Link>
					</div>
				</div>
				<div class="col-9 profile-body-right">
					<div style={{ padding: "30px" }}>
						<label className="mb-3">Organization Name</label>
						<div className='orgIcon'>
							<input
								type="text"
								class="form-control input-Fields"
								disabled="true"
								id="orgName"
								name="orgName"
								placeholder="First Name"
								value={setOrg.orgName}
							/>
							<button className='btn btn-small btn-outline-secondary'>
								<img src={Edit} alt="" width="30px" height="30px" />
							</button>

						</div>

						<div className='mb-3'>
							<input
								type="text"
								class="form-control input-Fields"
								id="orgName"
								name="orgName"
								placeholder="Edit First Name here"
								value={formValues.orgName}
								onChange={handleChange}
							/>
							<div className="formErrors text-danger">
								<p>{formErrors.orgName}</p>
							</div>
						</div>

						<label className="mb-3">Email Address</label>
						<div className='orgIcon'>
							<input
								type="text"
								class="form-control input-Fields"
								id="orgEmail"
								name="orgEmail"
								disabled="true"
								value={setOrg.orgEmail}
								placeholder="Email Address"
							/>
							<button className='btn btn-small btn-outline-secondary'>
								<img src={Edit} alt="" width="30px" height="30px" />
							</button>
						</div>
						<div className='mb-3'>
							<input
								type="email"
								class="form-control input-Fields"
								id="orgEmail"
								name="orgEmail"
								placeholder="Edit your email here"
								value={formValues.orgEmail}

								onChange={handleChange}
							/>
							<div className="formErrors text-danger">
								<p>{formErrors.orgEmail}</p>
							</div>
						</div>


						<label className="mb-3">Phone Number</label>
						<div className='orgIcon'>
							<input
								type="text"
								name="orgContactNumber"
								class="form-control "
								id="orgContactNumber"
								disabled="true"
								value={setOrg.orgContactNumber}
								placeholder="Phone Number"
							/>
							<button className='btn btn-small btn-outline-secondary'>
								<img src={Edit} alt="" width="30px" height="30px" />
							</button>
						</div>
						<div>
							<input
								type="text"
								class="form-control input-Fields"
								id="orgContactNumber"
								name="orgContactNumber"
								placeholder="Edit your contact number"
								value={formValues.orgContactNumber}
								onChange={handleChange}
							/>
							<div className="formErrors text-danger">
								<p>{formErrors.orgContactNumber}</p>
							</div>
						</div>

						<form className="d-flex justifyContent">
							<Link to='/organization'><button className="btn body-button-style2 padding-l-15 padding-r-15" type="submit">Cancel</button></Link>&nbsp;
							<button className="btn body-button-style3 btn-sm" type="submit" onClick={handleSubmit}> Save </button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile2