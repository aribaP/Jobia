import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profilee from '../assets/Profile.png';
import Edit from '../assets/edit.png';

const Profile2 = () => {

  const navigate = useNavigate();
  const initialvalues = {
    candName: "",
    candEmail: "",
    candContactNumber: "",
    candCity: ""

  };

  // const [formValues, setFormValues] = useState(setCand);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [setCand, setCandDetails] = useState({});
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

    console.log("Done", formValues.candEmail);
    if (isSubmit && Object.keys(formErrors).length === 0) {
      console.log("useeffect", setCand);
      postData(formValues);
      console.log(formValues);  //Rectified values after validation
    }
    console.log(formValues);
  };


  const postData = async (body) => {
    console.log("Body", body);
    try {
      await axios.patch("http://localhost:5000/candidate/2", body)
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
      await axios.get("http://localhost:5000/candidate/2")
        .then((response) => {
          console.log("Data recieved");
          setCandDetails(response.data);
          console.log("orgSet", setCand);

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
    const regexCNIC = /^[0-9]{5}-[0-9]{7}-[0-9]$/gm;

    console.log("I am in validation");
    if (!values.candName) { errors.candName = "Username is required!"; }

    if (!values.candCity) { errors.candCity = "Username is required!"; }

    if (!values.candAddress) { errors.candAddress = "Address is required!"; }

    if (!values.candEmail) { errors.candEmail = "Email is required!"; }
    else if (!regex.test(values.candEmail)) { errors.candEmail = "This is not a valid email format!"; }

    if (!values.candContactNumber) { errors.candContactNumber = "Phone number is required!"; }
    else if (!regexphoneno.test(values.candContactNumber)) { errors.candContactNumber = "Invalid phonenumber!"; }

    if (!values.candCNIC) { errors.candCNIC = "CNIC is required!"; } 
    else if (!regexCNIC.test(values.candCNIC)) { errors.candCNIC = "CNIC must follow the XXXXX-XXXXXXX-X format!"; }
    
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
            <label className="mb-3"> Candidate Name</label>
            <div className='orgIcon'>
              <input
                type="text"
                class="form-control input-Fields"
                disabled="true"
                id="candName"
                name="candName"
                placeholder="First Name"
                value={setCand.candName}
              />
              <button className='btn btn-small btn-outline-secondary'>
                <img src={Edit} alt="" width="30px" height="30px" />
              </button>

            </div>

            <div className='mb-3'>
              <input
                type="text"
                class="form-control input-Fields"
                id="candName"
                name="candName"
                placeholder="Edit First Name here"
                value={formValues.candName}
                onChange={handleChange}
              />
              <div className="formErrors text-danger">
                <p>{formErrors.candName}</p>
              </div>
            </div>

            <label className="mb-3"> Email Address</label>
            <div className='orgIcon'>
              <input
                type="text"
                class="form-control input-Fields"
                id="candEmail"
                name="candEmail"
                disabled="true"
                value={setCand.candEmail}
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
                id="candEmail"
                name="candEmail"
                placeholder="Edit your email here"
                value={formValues.candEmail}

                onChange={handleChange}
              />
              <div className="formErrors text-danger">
                <p>{formErrors.candEmail}</p>
              </div>
            </div>


            <label className="mb-3">Phone Number</label>
            <div className='orgIcon'>
              <input
                type="text"
                name="candContactNumber"
                class="form-control "
                id="candContactNumber"
                disabled="true"
                value={setCand.candContactNumber}
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
                id="candContactNumber"
                name="candContactNumber"
                placeholder="Edit your contact number"
                value={formValues.candContactNumber}
                onChange={handleChange}
              />
              <div className="formErrors text-danger">
                <p>{formErrors.candContactNumber}</p>
              </div>
            </div>

            <label className="mb-3"> City</label>
            <div className='orgIcon'>
              <input
                type="text"
                name="candCity"
                class="form-control "
                id="candCity"
                disabled="true"
                value={setCand.candCity}
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
                id="candCity"
                name="candCity"
                placeholder="Edit your contact number"
                value={formValues.candCity}
                onChange={handleChange}
              />
              <div className="formErrors text-danger">
                <p>{formErrors.candCity}</p>
              </div>
            </div>

            <label className="mb-3"> CNIC </label>
            <div className='orgIcon'>
              <input
                type="text"
                name="candCNIC"
                class="form-control "
                id="candCNIC"
                disabled="true"
                value={setCand.candCNIC}
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
                id="candCNIC"
                name="candCNIC"
                placeholder="Edit your contact number"
                value={formValues.candCNIC}
                onChange={handleChange}
              />
              <div className="formErrors text-danger">
                <p>{formErrors.candCNIC}</p>
              </div>
            </div>

            <label className="mb-3"> Residential Address </label>
            <div className='orgIcon'>
              <input
                type="text"
                name="candAddress"
                class="form-control "
                id="candAddress"
                disabled="true"
                value={setCand.candAddress}
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
                id="candAddress"
                name="candAddress"
                placeholder="Edit your contact number"
                value={formValues.candAddress}
                onChange={handleChange}
              />
              <div className="formErrors text-danger">
                <p>{formErrors.candAddress}</p>
              </div>
            </div>

            <form className="d-flex justifyContent">
              <Link to='/candidate'><button className="btn body-button-style2 padding-l-15 padding-r-15" type="submit">Cancel</button></Link>&nbsp;
              <button className="btn body-button-style3 btn-sm" type="submit" onClick={handleSubmit}> Save </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile2