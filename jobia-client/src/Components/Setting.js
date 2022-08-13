import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosApiService } from '../services/axiosAPIs';

const Setting = ({ onChangeStatus, onChangeTabs, setCheck }) => {

  
  return (
    <div className="padding-20 resume-create-container">
    <div
      style={{
        border: "4px solid #1e957d",
        borderRadius: "20px",
        width: "100%",
      }}

      ></div>
        

    

       


            <div className='btn1 pt-5'>
              <button className="btn button-style-full btn-clr-brown btn-sm" type="delete" > Delete your Account</button>

            </div>
       

      
    </div>

  );
};

export default Setting
