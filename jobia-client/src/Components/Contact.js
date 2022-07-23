import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Contact from  "../assets/Contact (2).png"

const ContactUs = () => {
    return (
      <>
        <Header />
        <div className='contactUsHeader image.png '>
          <h2 style={{ fontWeight: 400,}}>Contact Us</h2>
        </div>
        <div class="container contactUsContainer">
          <div class="row g-2 padding-top-15">
            <div class="col-6 ">
              <div class="contact_img">
                <img  src={Contact} alt="" width="90%" />
              </div>
            </div>
            <div class="col-6">
              <div class="p-5 mt-3  padding-top-30">
                <h2 className='mb-revert'>Contact Us!</h2>
                <div class="mb-4">
                  <input type="text" class="form-control input-Fields" id="EmailAddress" placeholder="Email address" />
                </div>
                <div class="mb-4">
                  <textarea
                    className="form-control input-Fields"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  />
                </div>
                <button className="btn btn-secondary body-button-style" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
        <Footer dark={true} />
      </>
  
    )
  }
  
  export default ContactUs