import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import Register from './Components/Register';
import Register2 from './Components/Register2';
import Login from './Components/Login'
import Account from './Components/Account'
import RegistrationOption from './Components/RegistrationOption'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'
import Profile from './Components/Profile'
import Profile2 from './Components/Profile2';
import Jobs from './Components/Jobs';
import Organization from './Components/Organization';
import Resume from './Components/Resume';
import ViewOneJob from './Components/ViewOneJob';
import EditOneJob from './Components/EditOneJob';
import ResumeDisplay from './Components/ResumeDisplay';
import UpdateResume from './Components/UpdateResume';
import AllJobs from './Components/AllJobs';








function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register2' element={<Register2 />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/registrationOption' element={<RegistrationOption />}/>
        <Route path='/footer' element={<Footer />}/>
        
        
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/profile2' element={<Profile2 />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/organization' element={<Organization />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route exact path='/onejob' element={<ViewOneJob />}/>
        <Route exact path= '/editonejob'element= {<EditOneJob/>}/>
        <Route exact path= '/displayresume'element= {<ResumeDisplay/>}/>
        <Route exact path= '/update'element= {<UpdateResume/>}/>
        
        
        {/* <Route path='/policy' element={<Policy />}/> */}


      </Routes>
    </>
  );
}

export default App;
