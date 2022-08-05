import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profilee from '../assets/Profile.png'
const Profile2 = () => {

  const navigate = useNavigate();
	const initialvalues = {
		orgName: "",
		orgEmail: "",
    orgContactNumber: "",

	};

	const [formValues, setFormValues] = useState(initialvalues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	let name, value;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value }); //...=>spread operator
		console.log("form values", formValues);

	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
		console.log(formValues);
	};
	const postData = async (body) => {

		try {
			await axios.post("http://localhost:5000/candidate/signupCand", body)
				.then((response) => {
					console.log("Data recieved");
					console.log(response.data);
					const results = response.data;
					navigate('/profile2', { replace: true });
				})

		} catch (err) {
			console.log(err);
		}

	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {

			postData(formValues);
			console.log(formValues);  //Rectified values after validation
		}
	}, [postData]);



	const validate = (values) => {

		const errors = {};
		// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		// if (!values.candName) {
		//   errors.candName = "Username is required!";
		// }
		// if (!values.candEmail) {
		//   errors.email = "Email is required!";
		// } else if (!regex.test(values.candEmail)) {
		//   errors.email = "This is not a valid email format!";
		// }
		// if (!values.candPassword) {
		//   errors.candPassword = "Password is required";
		// } else if (values.candPassword.length < 4) {
		//   errors.candPassword = "Password must be more than 4 characters";
		// } else if (values.candPassword.length > 10) {
		//   errors.candPassword = "Password cannot exceed more than 10 characters";
		// }

		// if (!validator.isStrongPassword(value, {
		//     minLength: 8, minLowercase: 1,
		//     minUppercase: 1, minNumbers: 1, minSymbols: 1
		// })) {
		//     errors.candPassword = "Password must be strong";
		// } 
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
            <input
              type="text"
              class="form-control mb-3 input-Fields"
              id="orgName"
              name="orgName"
              placeholder="First Name"
            />

            <label className="mb-3">Email Address</label>
            <input
              type="text"
              class="form-control mb-3 input-Fields"
              id="orgEmail"
              name="orgEmail"
              placeholder="Email Address"
            />
            
            <label className="mb-3">Phone Number</label>
            <input
              type="text"
              name="orgContactNumber"
              class="form-control mb-3 input-Fields"
              id="orgContactNumber"
              placeholder="Phone Number"
            />

            <form className="d-flex justifyContent">
              <Link to='/organization'><button className="btn body-button-style2 padding-l-15 padding-r-15" type="submit">Cancel</button></Link>&nbsp;
              <Link to='/organization'><button className="btn body-button-style3 btn-sm" type="submit">Save</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile2