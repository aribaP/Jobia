import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewOneJob = () => {

  const navigate = useNavigate();
  const initialvalues = {
    jdPosition: "",
    jdMinimumExperience: "",
    jdLocation: "",
    jdCity: "",
    jdRequiredSkills: ""
  };

  const location = useLocation();
  const [formValues, setFormValues] = useState(initialvalues);


  
  const postData = async (body) => {
    // console.log((location.state));
    try {
      await axios.get("http://localhost:5000/job-description/122",)
        .then((response) => {
          console.log("Data recieved");
          console.log(response.data);
          const results = response.data;
          navigate('/organization', { replace: true });
        })

    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    postData(); 
  }, []);

  
  return (
    <div style={{ padding: '30px', marginLeft: '40px' }}>
      <div class='row'>
        <div class='col-12 profile-body-right'>
          <div style={{ padding: '30px' }}>


            <div className="mb-3">
              <label className='mb-3 mt-15'>Job Position</label>
              <textarea type="text" name="jdPosition" class="form-control mb-3 input-Fields"
                id="jdPosition" required placeholder="" style={{ width: 965 }}
                value={formValues.jdPosition}
                disabled
                rows='1'  />
            </div>

            <div className="mb-3">
              <label className='mb-3 mt-15'>Minimum Years</label>
              <textarea type="number" name="jdMinimumExperience" class="form-control mb-3 input-Fields"
                id="jdMinimumExperience" placeholder="In years" style={{ width: 965 }}
                value={formValues.jdMinimumExperience}
                rows='1' disabled  />
            </div>

            <div className="mb-3">
              <label className='mb-3 mt-15'>Requirements</label>
              <textarea
                class="form-control mb-3 input-Fields"
                id="jdRequiredSkills" style={{ width: 965 }}
                rows="10" disabled
                name='jdRequiredSkills'
                required
                value={formValues.jdRequiredSkills} />
            </div>

            <div class="mb-3">
              <label className='mb-3 mt-15'>City</label>
              <div>
                
              </div>
           
            </div>


            <div className="mb-3">
              <label className='mb-3 mt-15'>Location</label>
              <textarea type="text" name="jdLocation" class="form-control mb-3 input-Fields"
                id="jdLocation" required placeholder="" style={{ width: 965 }}
                value={formValues.jdLocation} 
                rows='1' disabled />
              
            </div>
          </div>



          <form className="d-flex justifyContent width-100" style={{  width: 100, marginLeft: '800px' }}>
          <button className="btn body-button-style2 padding-l-15 padding-r-15 mx-3 btn-sm" type="submit" >Cancel</button>
            
          </form>
        </div>
      </div>
    </div>

  )
}

export default ViewOneJob