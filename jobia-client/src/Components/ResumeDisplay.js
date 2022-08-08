import React from 'react'
import Rectangle from '../assets/Rectangle.png'
import { Link } from 'react-router-dom'

const ResumeDisplay = ({onChangeStatus, onChangeTabs, onChangeAllJobs, onChangeAllJobsTabs}) => {
  return (
    
    <div className='padding-20 resume-create-container'>
    <div style={{ border: '4px solid #5B4F64', borderRadius: '20px', width: '100%' }}></div>
    <div className='resume'>
      <p>
        <h1>Name</h1><br/>
        <h6>email address</h6>
        <h6>LinkedIn: linkedin&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Github: github</h6><br/><br/>
        <h4>Objective</h4>objective<br/><br/>
        <h4>Work Experience</h4>work experience<br/><br/>
        <h4>Education</h4>education<br/><br/>
        <h4>Projects</h4>projects<br/><br/>
        <h4>Skills</h4>skills<br/><br/>
        <h4>Interests/Hobbies</h4>hobbies<br/><br/>
      </p>
    </div>
  </div>
  )
}

export default ResumeDisplay