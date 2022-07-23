import React from 'react'
import '../Styles/style.css'
import PolygonRight from '../assets/PolygonRight.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Register2 = () => {
  return (
    <>
      <Header />
      <div className='body-Login'>
        <div className='width-30'>
          <h1 className='white-txt '>Welcome back to the best Job solution!</h1>
        </div>
        <div className='body-form'>
          <h5 className='mb-revert'>Sign In To Your Account</h5>
          <div class="mb-3">
            <input type="text" class="form-control input-Fields" id="EmailAddress" placeholder="Email address" />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control input-Fields" id="Password" placeholder="Create password" />
          </div>
          <button className="btn btn-secondary body-button-style" type="submit">Login</button>
        </div>
        <img className='polygonRight' src={PolygonRight} alt="" width="100" height="24" />
      </div>
      <Footer />
    </>
  )
}

export default Register2