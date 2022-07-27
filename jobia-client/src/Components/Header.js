import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import JobiaLogo from '../assets/Jobia_Logo.png'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  nav-style">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand" >
            <img src={JobiaLogo} alt="" width="100%" height="24" />
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/about' class="nav-link active" aria-current="page">About US</Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link">Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link to='/account' class="nav-link" >Get a Job</Link>
              </li>
              <li class="nav-item">
                <Link to='/organization' class="nav-link">Hire Employees</Link>
              </li>
            </ul>
            <form className="d-flex">
            <Link to='/login'><button className="btn btn-outline-secondary me-2 btn-sm padding-l-15 padding-r-15" type="submit">Log in</button></Link>
            <Link to='/registrationOption'><button className="btn btn-secondary body-button-style1" type="submit">Register</button></Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header