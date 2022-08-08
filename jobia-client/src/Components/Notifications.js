import React from 'react'

import Delete from '../assets/delete.png'
import Search from '../assets/search.png'
import Option from '../assets/options.png'

const Notifications = ({ onChangeStatus, onChangeTabs, setCheck }) => {


  
  return (

    <div className='padding-20 resume-create-container'>

      <div className="resume-view padding-20 mt-20">
        <div className="width-100 padding-20">
          <h3>FrontEnd Resume</h3>
          <h6>Due Date: dd/mm/yy</h6>
        </div>
        <div>
          <form className="d-flex mt-20 justifyContent width-100">
            {/* <Link to="/login"> */}
            <button
              className="btn button-style-outline me-2 btn-sm"
              type="submit"
              onClick={() => {
                onChangeStatus("Job");
                onChangeTabs("Resume");
              }}
            >
              View
            </button>
            {/* </Link> */}
            <button
              className="btn button-style-full me-2 btn-sm"
              type="submit"
              onClick={() => {
                onChangeStatus("Job");
                onChangeTabs("Resume");
              }}
            >
              Update
            </button>
            {/* <Link to="/"> */}
            <button
              className="btn button-style-full btn-clr-brown btn-sm create-resume"
              type="submit"
            >
              Delete
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
      {/* IT Manager */}
      <div className="resume-view padding-20 mt-20">
        <div className="width-100 padding-20">
          <h3>QA resume</h3>
          <h6>Due Date: dd/mm/yy</h6>
        </div>
        <div>
          <form className="d-flex mt-20 justifyContent width-100">
            {/* <Link to="/login"> */}
            <button
              className="btn button-style-outline me-2 btn-sm"
              type="submit"
              onClick={() => {
                onChangeStatus("Job");
                onChangeTabs("Resume");
              }}
            >
              View
            </button>
            {/* </Link> */}
            <button
              className="btn button-style-full me-2 btn-sm"
              type="submit"
              onClick={() => {
                onChangeStatus("Job");
                onChangeTabs("Resume");
              }}
            >
              Update
            </button>
            {/* <Link to="/"> */}
            <button
              className="btn button-style-full btn-clr-brown btn-sm create-resume"
              type="submit"
            >
              Delete
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>

    </div>

  );
};

export default Notifications
