import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosApiService } from '../services/axiosAPIs';

const Notifications = ({ onChangeStatus, onChangeTabs, setCheck }) => {

  const navigate = useNavigate();
  const initialvalues = {
    scoreId: null,
    resId: null,
    candId: null,
    candContactNumber: "",
    candEmail: "",
    candName: "",
    careerObjective: "",
    city: "",
    skills: "",
    education: {
      eduId: null,
      eduEndYear: null,
      eduInstituteName: ""
    },
    experience: {
      expId: null,
      exoYear: null,
      expCompanyName: "",
      expDescription: "",
    },
    projects: {
      projId: null,
      projTitle: "",
      projDescription: ""
    },
    github: "",
    city: "",
    linkedIn: "",
    skills: "",
    position: "",

  };


  const routeChange = (resId) => {
    let path = `/displayresume`;
    navigate(path, { state: { resId } });
  }

  const [formValues, setFormValues] = useState([initialvalues]);

  const handleDelete = (scoreId) => {
    console.log(scoreId);
    axios.delete("score/delete/" + scoreId)
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
    const user = JSON.parse(localStorage.getItem('userToken') ?? '{}');
    axiosApiService.coreApi.get(`organization/notification/${user.orgId}`)
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
         <div className='display-5 my-4 btn button-style-full text-black'>
        <h4  style={{
        color: "white",
          width: "100%",
     
        }}> We have found some best matches for you! </h4>
      </div>

      {

        formValues.map(details => (
          <div className="resume-view padding-20 mt-20">
            <div className="width-100 padding-20">


              <div key={details.position}>
                <h3>{details.position}</h3>
              </div>
            </div>
            <div className='btn1'>
              <button className="btn button-style-outline me-2 btn-sm" type="submit" onClick={() => routeChange(details.jdId)}> View </button>
              <button className="btn button-style-full btn-clr-brown btn-sm" type="delete" onClick={() => handleDelete(details.scoreId)}> Delete </button>

            </div>
          </div>

        ))

      }
    </div>

  );
};

export default Notifications
