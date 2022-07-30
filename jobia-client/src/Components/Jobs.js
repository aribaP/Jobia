import React from 'react'
import { Link } from 'react-router-dom'

const Jobs = ({ handleOnSave, onChangeTabs }) => {
  return (
    <div style={{ padding: '30px' }}>
      <div class='row'>
        <div class='col-12 profile-body-right'>
          <div style={{ padding: '30px' }}>
            <label className='mb-3 mt-15'>Required Skills</label>
            <div>
              <button className='btn-resume ml-15'> Add Skills</button>
            </div>
            <div className='resume-brdr'></div>
            <label className='mb-3 mt-15'>Minimum Experience (in years)</label>
            <div>
              <input
                type="number"
                class="form-control mb-3 input-Fields"
                id="experience"
                placeholder=""
                style={{width: 200}}
              />
            </div>
            <label className='mb-3 mt-15'>Location</label>
            <div>
              <textarea
                class="form-control mb-3 input-Fields"
                id="Location"
                rows="4"
              />
            </div>
            <label className='mb-3 mt-15'>City</label>
            <div>
              <select className="form-control city" style={{width: 300}}>
                <option>--select city--</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Quetta</option>
                <option>Islamabad</option>
                <option>Peshawar</option>
              </select>
            </div>
            <form className="d-flex justifyContent width-100">
            <Link to='/organization'><button className="btn body-button-style2 padding-l-15 padding-r-15" type="submit">Cancel</button></Link>&nbsp;
              <Link to='/organization'><button className="btn body-button-style3 btn-sm" type="submit" onClick={() => {
                handleOnSave('AllJobs')
                // onChangeTabs('AllJobs')
              }}>Save</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs