import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Jobs = ({ handleOnSave, onChangeTabs }) => {

  const navigate = useNavigate();
  const initialvalues = {
    jdPosition: "",
    jdMinimumExperience: "",
    jdLocation: "",
    jdCity: "",
    jdRequiredSkills: ""
  };

  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormValues({ ...formValues, [name]: value }); //...=>spread operator
    console.log("form values", formValues);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  };
  const handleCancel = (e) => {
    navigate('/organization', { replace: true });
  };
  
  const postData = async (body) => {

    

    try {
      await axios.post("http://localhost:5000/job-description/addjobdescription", body)
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
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {

      postData(formValues);
      console.log(formValues);  //Rectified values after validation
    }
  }, [formErrors]);



  const validate = (values) => {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    console.log("I am in validation");
    if (!values.jdPosition) { errors.jdPosition = "Job Position is required!"; }

    if (!values.jdLocation) { errors.jdLocation = "Company's Location is required!"; }

    if (!values.jdRequiredSkills) { errors.jdRequiredSkills = "Job requirements are required!"; }

    if (!values.jdCity) { errors.jdCity = "City is required!"; }

    if (!values.jdMinimumExperience) { errors.jdMinimumExperience = "Minimum experience is required!"; }
    else if(values.jdMinimumExperience < 0) { errors.jdMinimumExperience = "Experience can not be negative!"; }
    else if(isNaN(values.jdMinimumExperience)) { errors.jdMinimumExperience = "Must be a number!"; }



    console.log('Errors', errors)
    return errors;
  };

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
                rows='1' 
                onChange={handleChange} />
              <div className="formErrors text-danger">
                <p>{formErrors.jdPosition}</p>
              </div>
            </div>

            <div className="mb-3">
              <label className='mb-3 mt-15'>Minimum Years</label>
              <textarea type="number" name="jdMinimumExperience" class="form-control mb-3 input-Fields"
                id="jdMinimumExperience" placeholder="In years" style={{ width: 965 }}
                value={formValues.jdMinimumExperience}
                rows='1' 
                onChange={handleChange} />
              <div className="formErrors text-danger">
                <p>{formErrors.jdMinimumExperience}</p>
              </div>
            </div>

            <div className="mb-3">
              <label className='mb-3 mt-15'>Requirements</label>
              <textarea
                class="form-control mb-3 input-Fields"
                id="jdRequiredSkills" style={{ width: 965 }}
                placeholder="All the job requirements you demand"
                rows="10"
                name='jdRequiredSkills'
                required
                value={formValues.jdRequiredSkills}
                onChange={handleChange} />
              <div className="formErrors text-danger">
                <p>{formErrors.jdRequiredSkills}</p>
              </div>
            </div>

            <div class="mb-3">
              <label className='mb-3 mt-15'>City</label>
              <div>
                <select className="form-control city" id="jdCity" name="jdCity" style={{ width: 965 }} required
                  value={formValues.jdCity}
                  onChange={handleChange}>
                  <option>--Select city--</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Quetta</option>
                  <option>Islamabad</option>
                  <option>Peshawar</option>
                  <option>Faisalabad</option>
                  <option>Hyderabad</option>
                  <option>Multan</option>
                </select>
              </div>
              <div className="formErrors text-danger">
                <p>{formErrors.jdCity}</p>
              </div>
            </div>


            <div className="mb-3">
              <label className='mb-3 mt-15'>Location</label>
              <textarea type="text" name="jdLocation" class="form-control mb-3 input-Fields"
                id="jdLocation" required placeholder="" style={{ width: 965 }}
                value={formValues.jdLocation} 
                rows='1' 
                onChange={handleChange} />
              <div className="formErrors text-danger">
                <p>{formErrors.jdLocation}</p>
              </div>
            </div>
          </div>



          <form className="d-flex justifyContent width-100" style={{  width: 100, marginLeft: '800px' }}>
          <button className="btn body-button-style3 padding-l-15 padding-r-15 px-3" type="submit" onClick={ handleSubmit}>Save</button>
          <button className="btn body-button-style2 padding-l-15 padding-r-15 mx-3 btn-sm" type="submit" onClick={ handleCancel}>Cancel</button>
            
          </form>
        </div>
      </div>
    </div>

  )
}

export default Jobs