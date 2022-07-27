import React from 'react'
import '../Styles/style.css'
import polygon from '../assets/Polygon.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
const Register2 = () => {
	return (
		<>
			<Header />
			<div className='body'>
				<h4 className='white-txt font-28 mb-revert '>Ready to join the best job solution?</h4>
				<div className='body-form'>
					<h5 className='mb-revert text-center'>Sign up for a free account1</h5>
					<div class="row mb-3">
						<div class="col">
							<input type="text" class="form-control input-Fields" placeholder="First name" aria-label="First name" />
						</div>
						<div class="col">
							<input type="text" class="form-control input-Fields" placeholder="Last name" aria-label="Last name" />
						</div>
					</div>
					<div class="mb-3">
						<input type="text" class="form-control input-Fields" id="EmailAddress" placeholder="Email address" />
					</div>
					<div class="mb-3">
						<input type="password" class="form-control input-Fields" id="Password" placeholder="Create password" />
					</div>
					<Link to='/account'><button className="btn btn-secondary body-button-style" type="submit">Register</button></Link>
				</div>
				<img className='polygon' src={polygon} alt="" width="100" height="24" />
			</div>
			<Footer />
		</>
	)
}

export default Register2