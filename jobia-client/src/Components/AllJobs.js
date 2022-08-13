import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AllJobs = ({ setCheck, onChangeStatus, onChangeTabs }) => {
  const navigate = useNavigate();
  const initialvalues = {
    jdId: "",
    jdPosition: "",
    jdMinimumExperience: "",
    jdRequiredSkills: "",
    jdLocation: "",
    jdCity: ""
  };


  const routeChange = (jdId) => {
    let path = `/onejob`;
    navigate(path, {state:{jdId}});
  }
  const createJob = () => {
    let path = `/jobs`;
    navigate(path);
  }

  const handleUpdate = (jdId) => {
    let path = `/editonejob`;
    navigate(path, {state:{jdId}});
  }


  const [formValues, setFormValues] = useState([initialvalues]);

  const handleDelete = (jdId) => {

    axios.delete("http://localhost:5000/job-description/" + jdId)
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
        setFormValues(response.data);
        console.log("Data recieved");
        console.log(response.data);
        
        console.log(formValues);

      }).catch(err => {
        console.log(err);
      })
  }, []);


  return (
    <div className="padding-20 resume-create-container">
      <div
        style={{
          border: "4px solid #1e957d",
          borderRadius: "20px",
          width: "100%",
        }}
      ></div>
      {

        formValues.map(details => (
          <div className="resume-view padding-20 mt-20">
            <div className="width-100 padding-20">
              <div key={details.jdId}>
                <h3>{details.jdPosition}</h3>
              </div>
            </div>
            <div className='btn1'>
              <button  className="btn button-style-outline me-2 btn-sm" type="submit" onClick={()=>routeChange(details.jdId)}> View </button>
              <button className="btn button-style-full me-2 btn-sm" type="submit" onClick={()=>handleUpdate(details.jdId)}> Update </button>
              <button className="btn button-style-full btn-clr-brown btn-sm" type="delete" onClick={()=>handleDelete(details.jdId)}> Delete </button>

            </div>
          </div>

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
