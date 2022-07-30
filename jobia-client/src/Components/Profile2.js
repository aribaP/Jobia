import React from 'react'
import { Link } from 'react-router-dom'
import Profilee from '../assets/Profile.png'
const Profile2 = () => {
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
            id="FirstName"
            placeholder="First Name"
          />
          
          <label className="mb-3">Email Address</label>
          <input
            type="text"
            class="form-control mb-3 input-Fields"
            id="EmailAddress"
            placeholder="Email Address"
          />
          <label className="mb-3">Phone Number</label>
          <input
            type="text"
            class="form-control mb-3 input-Fields"
            id="PhoneNumber"
            placeholder="Phone Number"
          />
          <label className="mb-3">Bio</label>
          <textarea
            class="form-control mb-3 input-Fields"
            id="Bio"
            rows="4"
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