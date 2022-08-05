import React from 'react'
import { Link } from 'react-router-dom'
import Profilee from '../assets/Profile.png'

const Resume = ({handleOnSave, onChangeTabs}) => {
  return (
    <div style={{ padding: '30px' }}>
      <div class='row'>
        <div class='col-12 profile-body-right'>
          <div style={{ padding: '30px' }}>
          <label className='mb-3 mt-15'>Email Address</label>
            <div>
              <input
                type="text"
                class="form-control mb-3 input-Fields"
                id="emailaddress"
                placeholder="Enter Email Address"
                style={{width: 965}}
              />
            </div>
            <label className='mb-3'>Career Objective</label>
            <textarea
              class="form-control mb-3 input-Fields"
              id="CareerObject"
              placeholder="Objective"
              rows="4"

            />
            <label className='mb-3'>Education</label>
            <div className='resume-field padding-10'>
              <div className='flex'>
                <div className='resume-field-inner'>
                  <p className='resume-p'>Degree</p>
                  <p className='resume-p'>Institute</p>
                </div>
                <div className='resume-field-inner2'>
                  <p className='resume-p'>Year of Greduation</p>
                </div>
              </div>
              <button className='btn-resume'> Add education</button>
            </div>
            <label className='mb-3 mt-15'>Experience</label>
            <div className='resume-field padding-10'>
              <div className='flex'>
                <div className='resume-field-inner-exp'>
                  <p className='resume-p'>Years of Experience</p>
                  <p className='resume-p'>Job Position</p>
                  <p className='resume-p'>Job Description</p>
                </div>
              </div>
              <button className='btn-resume'> Add experience</button>
            </div>

            <label className='mb-3 mt-15'>Project</label>
            <div>
              <button className='btn-resume ml-15'> Add Projects</button>
            </div>
            <div className='resume-brdr'></div>

            <label className='mb-3 mt-15'>Skills</label>
            <div>
              <button className='btn-resume ml-15'> Add skills</button>
            </div>
            <div className='resume-brdr'></div>

            <label className='mb-3 mt-15'>Linkedin Profile URL</label>
            <input type="text" class="form-control mb-3 resume-input-field" id="linkedin" placeholder="" />

            <label className='mb-3 mt-15'>Github Link</label>
            <input type="text" class="form-control mb-3 resume-input-field" id="GithubLink" placeholder="" />

            <label className='mb-3 mt-15'>Interests/Hobbies</label>
            <div>
              <button className='btn-resume ml-15'>Add Interests</button>
            </div>
            <div className='resume-brdr'></div>
            <form className="d-flex justifyContent width-100">
            <Link to='/account'><button className="btn body-button-style2 padding-l-15 padding-r-15" type="submit">Cancel</button></Link>&nbsp;
              <Link to='/account'><button className="btn body-button-style3 btn-sm" type="submit" onClick={() => handleOnSave('ResumeView')}>Save</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Resume