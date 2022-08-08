import React from 'react'

import Delete from '../assets/delete.png'
import Search from '../assets/search.png'
import Option from '../assets/options.png'

const  Notifications  = ({ onChangeStatus, onChangeTabs,setCheck }) => {
  return (

    <div className='padding-20 resume-create-container'>
     {/* <div className='notification-header width-100 padding-10'>
        <div class="input-group width-30 rounded">
          <input type="search" class="form-control  rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <img src={Search} alt="" width="30px" height="30px"  className='search-icon'/>
        </div>
        <img src={Option} alt="" width="30px" height="30px"/>
     </div>
      <button 
        className='notification-sub-header padding-10 border-0 width-100' 
        >
        <div >
          <img onClick= {() => alert('----this is deleted----')} src={Delete} alt="" width="16px" height="20px" />
        </div>
        </button>
         */}
      
    
     
      <div className="resume-view padding-20 mt-20">
        <div className="width-100 padding-20">
          <h3>FrontEnd Resume</h3>
          <h6>Due Date: dd/mm/yy</h6>
        </div>
        {/* <div> */}
          {/* <form> */}
            <div className='btn1'>
            <button
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
              </div>
              {/* </form> */}
        {/* </div> */}     </div>
      {/* IT Manager */}
      <div className="resume-view padding-20 mt-20">
        <div className="width-100 padding-20">
          <h3>QA Resume</h3>
          <h6>Due Date: dd/mm/yy</h6>
        </div>
        <div className='btn1'>
          {/* <form> */}
            <button
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
      
      {/* <form className="d-flex mt-20 justifyContent width-100"> */}
        {/* <Link to="/"> */}
        <div className='createJob'>
          <button   onClick={() => {
              }} className="btn button-style-full me-2 btn-sm" type="submit">
            Create Job
          </button>
          </div>
        {/* </Link> */}
      {/* </form> */}
      </div>
    
  );
};

export default Notifications
