import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NotificationsCandidate = ({ onChangeStatus, onChangeTabs, setCheck }) => {

    const initialvalues = {
        jdId: null,
        jdPosition: "",
        jdRequiredSkills: "",
        jdMinimumExperience: null,
        jdCity: "",
        jdLocation: "",
        scoreId: null,
        orgName: ""

    };


    const [formValues, setFormValues] = useState([initialvalues]);

    const handleDelete = (scoreId) => {

        console.log(scoreId);
        axios.delete("http://localhost:5000/score/delete/" + scoreId)
            .then(response => {
                console.log("Data recieved");
                console.log(response.data);
                setFormValues(response.data);
                console.log(formValues);
                window.alert("Information deleted");


            }).catch(err => { 
                console.log(err);
            })
    }

    useEffect(() => {

        axios.get("http://localhost:5000/candidate/notification/27")
            .then(response => {
                setFormValues(response.data);
                console.log("Data recieved");
                console.log(response.data);

                console.log(formValues);

            }).catch(err => {
                console.log(err);
            })

    }, []);
    return (
        <div className="padding-20 resume-create-container">
            <div
                style={{
                    border: "4px solid #5B4F64",
                    borderRadius: "20px",
                    width: "100%",
                }}

            ></div>
            <div className='display-5 my-4 btn button-style-full text-black'>
                <h4><b>We have found some best matches for you! </b></h4>
            </div>

            {

                formValues.map(details => (
                    <div className="resume-view padding-20 mt-20">
                      
                        <div className="width-100 padding-20">


                            <div key={details.orgName}>
                                <h4> <b><u>  Company Name:</u></b>  {details.orgName}</h4>
                            </div>
                            <div key={details.jdPosition}>
                                <h5> <b><u>  Job Position:</u></b>  {details.jdPosition}</h5>
                            </div>
                            <div key={details.jdRequiredSkills}>
                                <p> <b><u>  Requirements:</u></b>   {details.jdRequiredSkills}</p>
                            </div>
                            <div key={details.jdMinimumExperience}>
                                <p> <b><u>  Minimum Experience:</u></b>   {details.jdMinimumExperience}</p>
                            </div>
                            <div key={details.jdLocation}>
                                <p> <b><u>  Location:</u></b>   {details.jdLocation} </p>
                            </div>
                            <div key={details.city}>
                                <p> <b><u>  City:</u></b>   {details.jdCity} </p>
                            </div>

                        </div>
                        <div className='btn1'>
                            <button className="btn button-style-full btn-clr-brown btn-sm" type="delete" onClick={() => handleDelete(details.scoreId)}> Delete </button>
                        </div>
                    </div>
                   
                ))

            }
        </div>

    );
};

export default NotificationsCandidate;
