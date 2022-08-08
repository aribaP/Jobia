import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profilee from '../assets/Profile.png';
import Edit from '../assets/edit.png';

const EditOneJob = () => {

    const navigate = useNavigate();
    const initialvalues = {
        jdId: "",
        jdPosition: "",
        jdMinimumExperience: "",
        jdRequiredSkills: "",
        jdLocation: "",
        jdCity: ""
    };

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [setJD, setJDDetails] = useState({});
    const [formValues, setFormValues] = useState(initialvalues);

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setFormValues({ ...formValues, [name]: value }); //...=>spread operator
        console.log("form values", formValues);

    };


    const handleCancel = (e) => {
        navigate('/organization', { replace: true });

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setFormErrors(validate(formValues));

        if (formValues.jdCity === "")
            formValues.jdCity = setJD.jdCity;

        if (formValues.jdLocation === "")
            formValues.jdLocation = setJD.jdLocation;

        if (formValues.jdPosition === "")
            formValues.jdPosition = setJD.jdPosition;

        if (formValues.jdMinimumExperience === null)
            formValues.jdMinimumExperience = setJD.jdMinimumExperience;

        if (formValues.jdRequiredSkills === "")
            formValues.jdRequiredSkills = setJD.jdRequiredSkills;

        console.log(formValues);
    };


    const postData = async (body) => {
        const data = {
            jdPosition: body.jdPosition,
            jdCity: body.jdCity,
            jdLocation: body.jdLocation,
            jdMinimumExperience: body.jdMinimumExperience,
            jdRequiredSkills: body.jdRequiredSkills,
        };
        try {
            await axios.patch("http://localhost:5000/job-description/update/133", data)
                .then((response) => {
                    console.log("Data recieved");
                    console.log(response.data);
                    alert("Information saved.");
                    window.location.reload();
                })

        } catch (err) {
            console.log(err);
        }

    };

    const getData = async () => {

        try {
            await axios.get("http://localhost:5000/job-description/getone/133")
                .then((response) => {
                    console.log("Data recieved");
                    setJDDetails(response.data);
                    console.log("JDSET", setJD);

                })

        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        getData();
        console.log(formErrors);
        if (isSubmit && Object.keys(formErrors).length === 0) {
            console.log("useeffect", setJD);
            postData(formValues);
            console.log(formValues);
        }

    }, [formErrors]);



    const validate = (values) => {
        const errors = {};

        return errors;
    };


    return (

        <div style={{ paddingRight: "40px", marginLeft: "100px" }}>
            <div class="row">

                <div class="col-10 profile-body-right">
                    <div style={{ padding: "30px" }}>
                        <label className="mb-3"> Job Position</label>
                        <div className='orgIcon'>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                disabled="true"
                                id="jdPosition"
                                name="jdPosition"
                                value={setJD.jdPosition}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>

                        </div>

                        <div className='mb-3'>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                id="jdPosition"
                                name="jdPosition"
                                placeholder="Edit here"
                                value={formValues.jdPosition}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdPosition}</p>
                            </div>
                        </div>

                        <label className="mb-3"> Minimum Experience </label>
                        <div className='orgIcon'>
                            <input
                                type="number"
                                class="form-control input-Fields"
                                id="jdMinimumExperience"
                                name="jdMinimumExperience"
                                disabled="true"
                                value={setJD.jdMinimumExperience}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>
                        </div>

                        <div className='mb-3'>
                            <input
                                type="number"
                                class="form-control input-Fields"
                                id="jdMinimumExperience"
                                name="jdMinimumExperience"
                                placeholder="Edit here"
                                value={formValues.jdMinimumExperience}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdMinimumExperience}</p>
                            </div>
                        </div>


                        <label className="mb-3"> Required Skills</label>
                        <div className='orgIcon'>
                            <textarea
                                type="text"
                                name="jdRequiredSkills"
                                class="form-control input-Fields"
                                id="jdRequiredSkills"
                                disabled="true"
                                value={setJD.jdRequiredSkills}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                id="jdRequiredSkills"
                                name="jdRequiredSkills"
                                placeholder="Edit here"
                                value={formValues.jdRequiredSkills}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdRequiredSkills}</p>
                            </div>
                        </div>

                        <label className="mb-3"> City</label>
                        <div className='orgIcon'>
                            <input
                                type="text"
                                name="jdCity"
                                class="form-control input-Fields"
                                id="jdCity"
                                disabled="true"
                                value={setJD.jdCity}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                id="jdCity"
                                name="jdCity"
                                placeholder="Edit here"
                                value={formValues.jdCity}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdCity}</p>
                            </div>
                        </div>

                        <label className="mb-3"> Location </label>
                        <div className='orgIcon'>
                            <input
                                type="text"
                                name="jdLocation"
                                class="form-control input-Fields"
                                id="jdLocation"
                                disabled="true"
                                value={setJD.jdLocation}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                id="jdLocation"
                                name="jdLocation"
                                placeholder="Edit here"
                                value={formValues.jdLocation}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdLocation}</p>
                            </div>
                        </div>


                        <form className="d-flex justifyContent width-100" style={{ width: 100, marginLeft: '800px' }}>
                            <button className="btn body-button-style3 padding-l-15 padding-r-15 px-3" type="submit" onClick={handleSubmit}>Save</button>
                            <button className="btn body-button-style2 padding-l-15 padding-r-15 mx-3 btn-sm" type="submit" onClick={handleCancel}>Cancel</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditOneJob