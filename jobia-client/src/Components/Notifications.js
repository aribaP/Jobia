import React from 'react'
import Delete from '../assets/delete.png'
import Search from '../assets/search.png'
import Option from '../assets/options.png'

const Notifications = () => {
  return (
    <div className='padding-20 resume-create-container'>
    <div className='notification-header width-100 padding-10'>
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
  </div>
  )
}

export default Notifications