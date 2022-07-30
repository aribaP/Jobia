import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import about from "../assets/aboutUs.png"


const About = () => {
  return (
    <>
      <Header />
      <section className="aboutUsHeader">
      <div>
        <h2 className="aboutUsHeading">ABOUT US</h2>
      </div>
      </section>
    {/* <div className='aboutUsHeader'>
          <h2 className="aboutUsHeading">ABOUT US</h2>
    </div> */}
<div className="aboutUsContainer">
  <div class="card text-center p-4 border-0">
  <div class="card-body ">
    <h1 class="card-title">WHY CHOOSE JOBIA?</h1>
    <p class="card-text">Jobia provides the best job solution !</p>
  </div>
</div>
  <div className="row m-0">
  <div className="col-sm-6">
  <div class="card p-3 border-0">
      <div class="card-body">
        <p class="card-text " style={{marginTop: 100, marginLeft: 100}}>Jobia provides a platform for both job seekers and organizations to fulfill their needs. 
        The portal provides employment opportunities to the job seekers and reduces the effort of searching job of desired position. 
        It facilitates the organization by filtering all the appropriate resumes according to the job description which eventually minimizes human resource work and screening process.</p>
      </div>
    </div>
</div>
<div className="col-sm-6">
  <div className=' m-3'>
  <img src={about} alt=""  width="60%" height="60%" />

      </div>
      </div>
      </div>
      </div>
      <footer>
          <Footer dark={true} />
        </footer>
      </>
    )
}

export default About;