import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosApiService } from '../services/axiosAPIs';
import authHeader from '../services/auth-header';

const CreateResume = ({ onChangeStatus, onChangeTabs }) => {


  const [formValues, setFormValues] = useState();
  const getData = async () => {

    try {
      const user = JSON.parse(localStorage.getItem('userToken') ?? '{}');
      await axiosApiService.coreApi.get(`candidate/showresume/${user.candId}`, {headers : authHeader()})
        .then((response) => {
          console.log(response[0].resFK['resId']);
          console.log("Data recieved");
          setFormValues(response[0].resFK['resId']);
          console.log(formValues);
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
      <div style={{ border: '4px solid #5B4F64', borderRadius: '20px', width: '100%' }}></div>
      <h4 className='padding-30 text-center'>Oops! Looks like you haven’t created any resume</h4>
      <h5 className='padding-30 text-center padding-top-0'>Create your resume now so that Jobia will find the perfect Job for you!</h5>

      <div className="crud-resume">
        <Link to="/displayresume" state={{ resId: formValues }}><button style={{ marginLeft: 5, width: 72 }} className="btn btn-primary" type="submit">View</button></Link>

        <button style={{ marginLeft: 5 }} className="btn btn-success" type="submit" onClick={() => {
          onChangeStatus('ResumePage')
          onChangeTabs('CreateResume')

        }}>Create</button>

        <Link to="/update" state={{ resId: formValues }}><button style={{ marginLeft: 5, color: 'white' }} className="btn btn-warning" type="submit" >Update</button></Link>


        <button style={{ marginLeft: 5 }} className="btn btn-danger" type="submit" onClick={() => {
          onChangeStatus('ResumePage')
          onChangeTabs('DeleteResume')
        }}>Delete</button>
      </div>
    </div>
  )
}

export default CreateResume