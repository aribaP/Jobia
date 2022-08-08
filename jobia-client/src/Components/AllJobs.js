import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AllJobs = ({setCheck,onChangeStatus,onChangeTabs}) => {
  const navigate = useNavigate();
  const initialvalues = {
    jdId: "",
    jdPosition: "",
    jdMinimumExperience: "",
    jdRequiredSkills: "",
    jdLocation: "",
    jdCity: ""
  };


  const routeChange = () =>{ 
    let path = `/onejob`; 
    navigate(path);
    }
  const createJob=()=>{
    let path = `/jobs`; 
    navigate(path);
  }
  

  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState([initialvalues]);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormValues({ ...formValues, [name]: value }); //...=>spread operator
    console.log("form values", formValues);

  };
  const handleDelete = (jdId) => {
    
    axios.delete("http://localhost:5000/job-description/"+jdId)
      .then(response => {
        console.log("Data recieved");
        console.log(response.data);
        setFormValues(response.data);
        console.log(formValues);
        window.alert("Information deleted");

      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {

    axios.get("http://localhost:5000/organization/showjobdescription/2")
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
    <div className="padding-20 resume-create-container">
      <div
        style={{
          border: "4px solid #5B4F64",
          borderRadius: "20px",
          width: "100%",
        }}
      ></div>
  {

formValues.map(details => (
  <div className="resume-view padding-20 mt-20">
        <div className="width-100 padding-20">
          <h3>Finance Manager</h3>
          <h6>Due Date: dd/mm/yy</h6>
        </div>
        <div className='btn1'>
          {/* <form> */}
            <button
              onClick={routeChange}
              className="btn button-style-outline me-2 btn-sm"
              type="submit"
            >
              View
            </button>
            <button
              className="btn button-style-full me-2 btn-sm"
              type="submit"
            >
              Update
            </button>
              <button
                className="btn button-style-full btn-clr-brown btn-sm"
                type="submit"
              >
                Delete
              </button>
              {/* </form> */}
        </div>
      </div>
  // <div className="resume-view padding-20 mt-20">
  //   <div className="width-100 padding-20">
  //     <div key={details.jdId}>
  //       <h3>{details.jdPosition}</h3>
  //     </div>
  //     <div>
  //       <form className="d-flex mt-20 justifyContent width-100">
  //       {/* <div> */}
  //         <button className="btn button-style-outline me-2 btn-sm" type="submit" onClick={()=>{
  //           onChangeStatus('ResumeDisplay')
  //         }}> Viewq </button>

  //         <button className="btn button-style-full me-2 btn-sm" type="submit"> Update </button>

  //         <button className="btn button-style-full btn-clr-brown btn-sm" type="delete" onClick={handleDelete}> Delete </button>


))

}

    

      <form className="d-flex mt-20 justifyContent width-100">
        {/* <Link to="/"> */}
        <button onClick={createJob} className="btn button-style-full me-2 btn-sm" type="submit">
          Create Job
        </button>
        {/* </Link> */}
      </form>
    </div >
  );
};

export default AllJobs;
