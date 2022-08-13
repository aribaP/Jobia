import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Notifications from '../assets/Notification.png'
import Settings from '../assets/Setting.png'
import Resumee from '../assets/Resume.png'
import NotificationsCandidate from '../Components/NotificationsCandidate'
import ResumeView from '../Components/ResumeView'
import CreateResume from './CreateResume'
import Profile from './Profile'
import Profilee from '../assets/Profile.png'
import Resume from './Resume'
import Jobs from './Jobs'
import AllJobs from './AllJobs'
import ResumeDisplay from './ResumeDisplay'
import ViewOneJob from './ViewOneJob'

import NavBarComponent from "./NavBarComponent";

const Account = (props) => {
  const [check, setCheck] = useState('Profile')
  const [show, setShow] = useState(true)
  const [showupload, setShowUpload] = useState(true)
  const [hireEmployee, setHireEmployee] = useState(false)
  const [job, setJob] = useState(true)
  const [tabs, setTabs] = useState('')

  console.log('-----handleOnSave------', show)
  console.log('-----tabs------', tabs)


  return (
    <>
     {/* <Header /> */}
  <NavBarComponent/>
      <div className='profileHeader'>
        <h2 style={{ fontWeight: 400 }}></h2>
      </div>
      <div class='row'>
        <div class='col-2 bg-Gray'>
          <div style={{ marginTop: '30px' }}>
            <button
              className={check === 'Profile' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
              onClick={() => setCheck('Profile')}
            >
              <div className='Account-Tabs'>
                <img src={Profilee} height='30px' width='30px' />
                <p className='m-l-2'>Edit your Profile</p>
              </div>
            </button>
            {
              !hireEmployee ? <button
                className={tabs === 'Resume' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
                onClick={() => {
                  setCheck('Resume')
                }}
              >
                <div className='Account-Tabs m-l-07'>
                  <img src={Resumee} height='20px' width='20px' />
                  <p className='m-l-2'>Control Resume</p>
                </div>
              </button> : <button
                className={tabs === 'Jobs' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
                onClick={() => {
                  setCheck('Jobs')
                  setTabs('Jobs')
                }}
              >
                <div className='Account-Tabs m-l-07'>
                  <img src={Resumee} height='20px' width='20px' />
                  <p className='m-l-2'>Job</p>
                </div>
              </button>
            }
            <button
              className={check === 'NotificationsCandidate' ? 'Account-button Account-button-border bg-White' : 'Account-button'}
              onClick={() => setCheck('NotificationsCandidate')}
            >
              <div className='Account-Tabs m-l-07'>
                <img src={Notifications} height='20px' width='20px' />
                <p className='m-l-2'>NotificationsCandidate</p>
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
          {check === 'Profile' &&
            <Profile />
          }
          {check === 'Resume' &&
            <CreateResume
              onChangeStatus={(val) => setCheck(val)}
              onChangeTabs={(val) => setTabs(val)}
            />
          }
          {check === 'ResumeView' && <ResumeView

      

            onChangeStatus={(val) => setCheck(val)}
            onChangeTabs={(val) => setTabs(val)}
          
          // onChangeAllJobs={(val) => setCheck(val)}
          // onChangeAllJobsTabs={(val) => setTabs(val)} 
          />}
          {check === 'ResumePage' && <Resume 
          handleOnSave={(val) => setCheck(val)}
           />}
          {check === 'ResumeDisplay' && <ResumeDisplay 
          handleOnSave={(val) => setCheck(val)}
          id = {68}
           />}
           {check === 'ViewOneJob' && <ViewOneJob
          handleOnSave={(val) => setCheck(val)}
           />}
          {check === 'Jobs' && <Jobs
            handleOnSave={(val) => setCheck(val)}
            onChangeTabs={(val) => setTabs(val)} />}
          {check === 'AllJobs' && <AllJobs />}


          {check === 'NotificationsCandidate' &&
            <NotificationsCandidate />
          }
        </div>
      </div>
          <footer>
      <Footer dark={true} /></footer>
    </>

  )
}

export default Account
//create Resume Page code
// {check === 'Resume' &&
// show ? 
// <CreateResume onChangeStatus= {(val) => setShow(val) }/> 
// : 
// showupload ? 
// <ResumeView onChangeStatus={(val) => setShowUpload(val)}/>  : <Resume />
// }