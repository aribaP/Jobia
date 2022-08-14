import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosApiService } from '../services/axiosAPIs';

const Setting = ({ onChangeStatus, onChangeTabs, setCheck }) => {

  const handleDelete = () => {

    const user = JSON.parse(localStorage.getItem('userToken') ?? '{}');
    if (user.role === "organization") {
      axiosApiService.coreApi.delete(`organization/delete/${user.orgId}`)
        .then(response => {

        }).catch(err => {
          console.log(err);
        })
    }
    else if (user.role === "candidate") {
      axiosApiService.coreApi.delete(`organization/delete/${user.candId}`)
        .then(response => {

        }).catch(err => {
          console.log(err);
        })
    }
  }
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
        <button onClick={handleDelete} className="btn button-style-full btn-clr-brown btn-sm" type="delete" > Delete your Account</button>
      </div>
    </div>

  );
};

export default Setting
