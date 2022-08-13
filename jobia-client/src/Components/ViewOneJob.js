import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header';
import NavBarComponent from "./NavBarComponent";

import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewOneJob = () => {

  const navigate = useNavigate();
  const initialvalues = {
    jdId: "",
    jdPosition: "",
    jdMinimumExperience: "",
    jdRequiredSkills: "",
    jdLocation: "",
    jdCity: ""
  };


 
  const [formValues, setFormValues] = useState(initialvalues);
  // http://localhost:5000/company/${ID}
  useEffect(() => {
    axios.get("http://localhost:5000/job-description/getone/124")
      .then(response => {
        console.log("Data recieved");
        console.log(response.data);
        setFormValues(response.data);
        console.log(formValues);

      }).catch(err => {
        console.log(err);
      })
  }, []);

  
  return (
    <>
    {/* <Header /> */}
    <NavBarComponent/>    <div>
    <section className="viewResume">
        <div>
          <h2 className="contactUsHeading">View Job</h2>
        </div>
      </section>
            <div class="row"  style={{
         margin: 0, display: "flex",
         justifyContent: "center",
         
        
      }}>
        <div class='col-9 profile-body-right'>
          <div style={{
          marginTop: "80px",marginBottom: "80px", borderRadius: "3px",
          boxShadow: "-1px 3px 18px 0px rgb(0 0 0 / 75%)",
          padding:"20px"
        }}>


            <div className="mb-3">
              <label className='mb-3 mt-15'>Job Position</label>
              <textarea type="text" name="jdPosition" class="form-control mb-3 input-Fields"
                id="jdPosition" required placeholder="" style={{width: "100%" }}
                value={formValues.jdPosition}
                disabled
                rows='1'  />
            </div>

            <div className="mb-3">
              <label className='mb-3 mt-15'>Minimum Years</label>
              <textarea type="number" name="jdMinimumExperience" class="form-control mb-3 input-Fields"
                id="jdMinimumExperience" placeholder="In years" style={{ width: "100%" }}
                value={formValues.jdMinimumExperience}
                rows='1' disabled  />
            </div>

            <div className="mb-3">
              <label className='mb-3 mt-15'>Requirements</label>
              <textarea
                class="form-control mb-3 input-Fields"
                id="jdRequiredSkills" style={{ width: "100%" }}
                rows="10" disabled
                name='jdRequiredSkills'
                required
                value={formValues.jdRequiredSkills} />
            </div>

            


            <div className="mb-3">
              <label className='mb-3 mt-15'>Location</label>
              <textarea type="text" name="jdLocation" class="form-control mb-3 input-Fields"
                id="jdLocation" required placeholder="" style={{ width: "100%" }}
                value={formValues.jdLocation} 
                rows='1' disabled />
              
            </div>
            <form className="d-flex justifyContent width-100" style={{  width: 100, marginLeft: '700px' }}>
          <button className="btn body-button-style2 padding-l-15 padding-r-15 mx-3 btn-sm" type="submit" >Cancel</button>
          </form>
          </div>
          </div>
        </div>
      </div>
    
    <footer>
        <Footer dark={true} />
      </footer>    </>
  )
}

export default ViewOneJob