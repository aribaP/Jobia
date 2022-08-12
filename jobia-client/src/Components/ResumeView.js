import React from 'react'
import Rectangle from '../assets/Rectangle.png'
import { Link } from 'react-router-dom'

const ResumeView = ({ onChangeStatus, onChangeTabs, id, onChangeAllJobs, onChangeAllJobsTabs }) => {


  return (
    <div className='padding-20 resume-create-container'>
      <div style={{ border: '4px solid #5B4F64', borderRadius: '20px', width: '100%' }}></div>
      <div className='resume-view padding-20 mt-20'>
        <img src={Rectangle} alt="" width="20%" height="120px" />
        <div className='width-100 padding-20'>
          <h3>My Resume</h3>
          <h6>Last Modified: dd/mm/yy</h6>
        </div>
      </div>
      <form className="d-flex justifyContent width-100">

        <button className="btn button-style-outline me-2 btn-sm" type="submit" onClick={() => {
          onChangeStatus('ResumePage')
          onChangeTabs('Job')
        }}>View</button>

        <button className="btn button-style-full me-2 btn-sm" type="submit" onClick={() => {
          onChangeStatus('ResumePage')
          onChangeTabs('Resume')
        }}>Update</button>

        <button className="btn button-style-full btn-clr-brown btn-sm create-resume" type="submit" onClick={() => {

          onChangeTabs('CreateResume')
          onChangeStatus('ResumePage')
        }}>Delete</button>
      </form>
    </div>
  )
}

export default ResumeView