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
        const user = JSON.parse(localStorage.getItem('userToken') ?? '{}');
        axios.get(`http://localhost:5000/candidate/notification/${user.candId}`)
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
        <div className="padding-20 resume-create-container"
        >
            <div
                style={{
                    border: "4px solid #1e957d",
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
                                <h4  style={{
                                        color: "#21aa8f",
                                    }}> <b><u>  Company Name:</u></b>  {details.orgName}</h4>
                            </div>
                            <div key={details.jdPosition}>
                                <h5  style={{
                                        color: "#21aa8f",
                                    }}> <b><u>  Job Position:</u></b>  {details.jdPosition}</h5>
                            </div>
                            <div key={details.jdRequiredSkills}>
                                <h5  style={{
                                        color: "#21aa8f",
                                    }}> <b><u>   Requirements:</u></b>
                                    <p style={{
                                        color: "#333",
                                        textAlign: "justify"
                                    }}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.  
                                    </p>
                                    {details.jdRequiredSkills}</h5>
                            </div>
                            <div key={details.jdMinimumExperience}>
                                <h5  style={{
                                        color: "#21aa8f",
                                    }}> <b><u>   Minimum Experience:</u></b>   {details.jdMinimumExperience}</h5>
                            </div>
                            <div key={details.jdLocation}>
                                <h5  style={{
                                        color: "#21aa8f",
                                    }}> <b><u>   Location:</u></b>   {details.jdLocation} </h5>
                            </div>
                            <div key={details.city}>
                                <h5  style={{
                                        color: "#21aa8f",
                                    }}> <b><u>   City:</u></b>   {details.jdCity} </h5>
                            </div>
 <div className='btn1'>
                            <button className="btn button-style-full btn-clr btn-sm" type="delete" onClick={() => handleDelete(details.scoreId)}> Delete </button>
                        </div>
                        </div>
                       
                    </div>

                ))
                

            }
            
        </div>

    );
};

export default NotificationsCandidate;
