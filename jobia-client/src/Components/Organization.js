import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header';
import Notifications from '../assets/Notification.png';
import Settings from '../assets/Setting.png';
import Resumee from '../assets/Resume.png';
import Notification from '../Components/Notifications';
import Profilee from '../assets/Profile.png';
import Jobs from './Jobs';
import AllJobs from './AllJobs';
import Profile2 from './Profile2';


const Organization = (props) => {
  const [check, setCheck] = useState('Profile')
  const [show, setShow] = useState(true)
  const [showupload, setShowUpload] = useState(true)
  const [hireEmployee, setHireEmployee] = useState(false)
  const [Job, setJob] = useState(true)
  const [tabs, setTabs] = useState('')

  console.log('-----handleOnSave------', show)
  console.log('-----tabs------', tabs)


  return (
    <>
      <Header


      />
      <div className='profileHeader'>
        <h2 style={{ fontWeight: 400 }}>*organization title*</h2>
      </div>
      <div class='row'>
        <div class='col-2 bg-Gray'>
          <div style={{ marginTop: '30px' }}>
            <button
              className={check === 'Profile2' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
              onClick={() => setCheck('Profile2')}
            >
              <div className='Account-Tabs'>
                <img src={Profilee} height='30px' width='30px' />
                <p className='m-l-2'>Edir Organization Details</p>
              </div>
            </button>
            <button
                className={check === 'Jobs' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
                onClick={() => {
                  setCheck('Job')
                  setTabs('Job')
                }}
              >
                <div className='Account-Tabs m-l-07'>
                  <img src={Resumee} height='20px' width='20px' />
                  <p className='m-l-2'>Control Job</p>
                </div>
              </button>
            
            <button
              className={check === 'Notifications' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
              onClick={() => {
                setCheck('Notifications')
                setTabs('Notificcations')
            }}
            >
              <div className='Account-Tabs m-l-07'>
                <img src={Notifications} height='20px' width='20px' />
                <p className='m-l-2'>Notifications</p>
              </div>
            </button>
            <button
              className={check === 'Settings' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
              onClick={() => setCheck('Settings')}
            >
              <div className='Account-Tabs m-l-07'>
                <img src={Settings} height='20px' width='20px' />
                <p className='m-l-2'>Settings</p>
              </div>
            </button>
          </div>

        </div>
        <div class='col-10'>
          {check === 'Profile2' &&
            <Profile2 />
          }
          {check === 'Job' && <Jobs
            handleOnSave={(val) => setCheck(val)}
            onChangeTabs={(val) => setTabs(val)} />}
          {check === 'AllJobs' && <AllJobs setCheck={setCheck}/>}




          {check === 'Notifications' &&
            <Notification />
          }
         

        </div>
      </div>
<footer>
      <Footer dark={true} />
      </footer></>

  )
}

export default Organization
//create Resume Page code
// {check === 'Resume' &&
// show ? 
// <CreateResume onChangeStatus= {(val) => setShow(val) }/> 
// : 
// showupload ? 
// <ResumeView onChangeStatus={(val) => setShowUpload(val)}/>  : <Resume />
// }