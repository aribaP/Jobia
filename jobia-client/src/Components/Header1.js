import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import JobiaLogo from '../assets/Jobia_Logo.png'

const Header1 = () => {
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
                <Link to='/about' class="nav-link" aria-current="page">About US</Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header1