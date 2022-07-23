import React from 'react'
import '../Styles/style.css'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from 'react-router-dom'


const RegistrationOption = () => {
	return (
		<>
			<Header />
        
  <div class="row align-items-start">
  
    <div class="col-6  col1">

      <h4 className='Heading_5'>Are You Job Seeker?</h4>
      <Link to= '/register2'><button type="button" class="btn btn-secondary center">Join Today</button></Link>

    </div>
    <div class="col-6  col2">
    <h4 className='Heading_5'>Are You Employers?</h4>

      <Link to= '/register'><button type="button" class="btn btn-secondary center2">Join Today</button></Link>

    </div>
    


   
  </div>
  
  <Footer dark={true} />
		</>
	)
}

export default RegistrationOption;