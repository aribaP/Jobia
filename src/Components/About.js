import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import about from "../assets/about-2.jpg"


const About = () => {
  return (
    <><Header/>
    <div class="card">
    <div className='contactUsHeader image.png '>
          <h2 style={{ fontWeight: 400,}}>About Us!</h2>
        </div>
  </div>
  <div class="card text-center p-4 border-0">
  <div class="card-body ">
    <h1 class="card-title">Special title treatment</h1>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
  <div className="row m-0">
  <div className="col-sm-6">
  <div class="card p-3 border-0">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text ">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div class="card p-3 border-0">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div class="card p-3 border-0">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
</div>
<div className="col-sm-6">
  <div className=' m-3'>
  <img src={about} alt=""  width="80%"/>

      </div>
      </div>
      </div>
      <Footer dark={true} />
        </>
      
        )
}

export default About;