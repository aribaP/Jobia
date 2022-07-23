import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home-container">
      <div className="container">
        <h3 className="heading_1">Find The Perfect Job That You <br></br>Deserved</h3>
        <Link to='/registrationOption'><button>Join Today</button></Link>
        </div>
      </section>

      <section className="good-company-section">
        <div className="container">
        <h3>You’re in good company</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="d-flex justify-content-around mt-5">
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
          <div className="good-company-section-rectangle"></div>
        </div>
        </div>
      </section>
      {/* <!-- Category Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div class="row g-3">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h6 class="mb-3">Marketing</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                            <h6 class="mb-3">Customer Service</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                            <h6 class="mb-3">Human Resource</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-tasks text-primary mb-4"></i>
                            <h6 class="mb-3">Project Management</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-chart-line text-primary mb-4"></i>
                            <h6 class="mb-3">Business Development</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                            <h6 class="mb-3">Sales & Communication</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-book-reader text-primary mb-4"></i>
                            <h6 class="mb-3">Teaching & Education</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="cat-item rounded p-4" >
                            <i class="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                            <h6 class="mb-3">Design & Creative</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Category End --> */}
      <section className="good-company-lower-part"> 
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="good-company-lower-part-rectangle_1"></div>
          <div>
            <h3>Sed ut perspiciatis unde omnis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="good-company-lower-part-rectangle"></div>
          <div>
            <h3>Sed ut perspiciatis unde omnis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          </div>
        </div>
        </div>
      </section>
      <Footer dark={true} />
    </>
  );
}
