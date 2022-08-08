import Delete from '../assets/delete.png'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../assets/search.png'
import Option from '../assets/options.png'

const Notifications = () => {

  const initialvalues = {

    candContactNumber: "",
    candEmail: "",
    candName: "",
    careerObjective: "",
    city: "",
    education: {
      eduId: "",
      eduEndYear: "",
      eduInstituteName: ""
    },
    experience: {
      expId: "",
      expCompanyName: "",
      expDescription: "",
      expYear: ""
    },
    projects: {
      projId: "",
      projTitle: "",
      projDescription: ""
    }

  };
  const [formValues, setFormValues] = useState([initialvalues]);

  // const data=[
  //   {
  //     id:11, name: "Ariba"
  //   },
  //   {
  //     id:12, name: "Arfghfghiba"
  //   },
  //   {
  //     id:13, name: "hfgh"
  //   }
  // ]

  const getData = async () => {

    try {
      await axios.get("http://localhost:5000/organization/notification/2")
        .then((response) => {
          console.log("Data recieved");
          console.log(response.data);
          // console.log(response.data[0]);
          setFormValues(response.data);
          console.log("aariba", formValues);
        })

    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    getData();

  }, []);



  return (
    <div className='padding-20 resume-create-container'>
      <div className='notification-header width-100 padding-20'>
        <div class="input-group width-50 rounded">
          <h2> Notifications </h2>
        </div>
      </div>
      <div className='notification-sub-header padding-10 border-0 width-100'>


        {/* {
          formValues.map((details) => (
            <div key={details.candContactNumber}>
              {details.candContactNumber}
            </div>
          ))
        } */}
        <Link to='/'> <button className='btn body-button-style3 btn-sm'> View Resume </button></Link>
        <button>
          <img className="" onClick={() => alert('----this is deleted----')} src={Delete} alt="" width="16px" height="20px" />
        </button>
      </div>


    </div>

  )
}

export default Notifications