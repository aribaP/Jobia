import * as Yup from 'yup'
// import TextError from './TextError'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const initialValues = {
    careerObjective: '',
    position: '',
    skills: '',
    gitHub: '',
    linkedIn: '',
    eduFK: [{
        eduEndYear: null,
        eduInstituteName: "",
        eduDegree: ""
    }],
    expFK: [{
        expCompanyName: "",
        expYear: null,
        expDescription: ""
    }],
    projFK: [{
        projTitle: "",
        projDescription: ""
    }]
}

const savedValues = {
    careerObjective: '5',
    position: '5',
    skills: '5',
    gitHub: '5',
    linkedIn: '5',
    eduFK: [{
        eduEndYear: null,
        eduInstituteName: "5",
        eduDegree: "5"
    }],
    expFK: [{
        expCompanyName: "5",
        expYear: null,
        expDescription: "5"
    }],
    projFK: [{
        projTitle: "5",
        projDescription: "5"
    }]
}

const onSubmit = (values, submitProps) => {
    console.log('form data', values);
    try {
        axios.delete("http://localhost:5000/resume/deletewhole/67").then((response) => {
            console.log("Data recieved");
            console.log("Oyeee", response.data);
        })
    } catch (err) {
        console.log(err);
        window.alert('Incorrect credentials');
    }
    try {
        axios.post("http://localhost:5000/resume/addwhole" , [values]).then((response) => {
            console.log("Data recieved");
            console.log("Oyeee", response.data);
            const results = response.data;
        })
    } catch (err) {
        console.log(err);
        window.alert('Incorrect credentials');
    }
}

const validationSchema = Yup.object({
    careerObjective: Yup.string().required('Required'),
    position: Yup.string().required('Required'),
    skills: Yup.string().required('Required'),
    linkedIn: Yup.string().required('Required'),
})

const validateComments = value => {
    let error
    if (! value) {
        error = 'Required'
    }
    return error
}

const getData = async () => {
    try {
        await axios.get("http://localhost:5000/resume/getwhole/67").then((response) => {
            console.log(response.data);
            console.log("Data recieved");
            // setResumeDetails(response.data);
            // console.log("ResumeSet", setResume);
        })
    } catch (err) {
        console.log(err);
    }
};


function UpdateResume() {

    const getData = async () => {
        try {
            await axios.get("http://localhost:5000/resume/getwhole/67").then((response) => {
                console.log(response.data[0]);
                console.log("Data recieved");
                setResumeDetails(response.data[0]);
                // console.log("ResumeSet", setResume);
            })
        } catch (err) {
            console.log(err);
        }
    };

    const [formValues, setFormValues] = useState(null)
    const [setResume, setResumeDetails] = useState();
    useEffect(() => {
        getData();
    }, []);



    return (
        <Formik
            initialValues={setResume || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        // validateOnMount
        >
            {formik => {
                console.log('Formik props', formik)
                return (
                    <div style={{ padding: '30px' }} className="container" >
                        <div col-12 profile-body-right >
                            <div style={{ padding: '30px' }}>
                                <Form action="#" style={{
					padding: "30px", border: "1px solid black", 
					
					borderRadius: "5px",
					boxShadow: "-1px 3px 18px 0px rgb(0 0 0 / 75%)"
				}}>
                                    <div class='row' className="form-first">
                                        <div className="detail personal">
                                            <span className="title"
                                            ><h1> Resume Creation Form </h1></span>
                                            <div className='fields'>
                                                <div className="input-fields">
                                                    <label htmlFor='careerObjective' style={{ paddingTop: '10px' }} className='mb-3'>Objective</label>
                                                    <Field type='text' class="form-control mb-3 input-Fields" id='careerObjective' name='careerObjective' />
                                                </div>
                                                <div className="input-fields">
                                                    <label className='mb-3' htmlFor='position'>position</label>
                                                    <Field type='text' class="form-control mb-3 input-Fields" id='position' name='position' />
                                                </div>
                                                <div className="input-fields">
                                                    <label className='mb-3' htmlFor='skills'>skills</label>
                                                    <Field type='text' class="form-control mb-3 input-Fields" id='skills' name='skills' validate={validateComments} />
                                                </div>
                                                <div className="input-fields">
                                                    <label className='mb-3' htmlFor='linkedIn'>linkedIn</label>
                                                    <Field type='text' class="form-control mb-3 input-Fields" id='linkedIn' name='linkedIn' validate={validateComments} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-field2">
                                        <label className='mb-3'>Education</label>
                                        <div className='flex'>
                                            <div className='resume-field-inner'>
                                                <><label className='resume-p'>Year</label></>
                                            </div>
                                            <div className='resume-field-inner3'>
                                                <><label className='resume-p'>Institute Name</label></>
                                            </div>
                                            <div className='resume-field-inner2'>
                                                <><label className='resume-p'>Degree</label></>
                                            </div>
                                        </div>
                                        <div className='form-control mb-3 input-Fields'>
                                            <FieldArray name='eduFK'>
                                                {fieldArrayProps => {
                                                    const { push, remove, form } = fieldArrayProps
                                                    const { values } = form
                                                    const { eduFK } = values
                                                    return (
                                                        <div className='section mb-5'>
                                                            {eduFK.map((eduFK, index) => (
                                                                <div className="fields2" key={index} >

                                                                    <div className='flex'>
                                                                        <div className='resume-field-inner'>
                                                                            <Field placeholder="Year" className='form-control mb-3 input-Fields' name={`eduFK[${index}].eduEndYear`} type="number" />
                                                                        </div>
                                                                        <div className='resume-field-inner3'>
                                                                            <Field placeholder="Institue Name" className='form-control mb-3 input-Fields' name={`eduFK[${index}].eduInstituteName`} type="text" />
                                                                        </div>
                                                                        <div className='resume-field-inner2'>
                                                                            <Field placeholder="Degree" className='form-control mb-3 input-Fields' name={`eduFK[${index}].eduDegree`} type="text" />
                                                                        </div>
                                                                        {index > 0 && (
                                                                            <button className='form-control mb-3 btn20' type='button' onClick={() => remove(index)}>-
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div style={{ float: "right" }}>
                                                                <button className='form-control mb-3 btn20' type='button' onClick={() => push('')}>+
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }}
                                            </FieldArray>
                                        </div>
                                    </div>
                                    <div className="input-field2">
                                        <label className='mb-3'>Experience</label>
                                        <div className='flex'>
                                            <div className='resume-field-inner'>
                                                <><label >Total Years of experience </label></>
                                            </div>
                                            <div className='resume-field-inner3'>
                                                <><label >Institute Name</label></>
                                            </div>
                                            <div className='resume-field-inner2'>
                                                <><label >Description</label></>
                                            </div>
                                        </div>
                                        <div className='form-control mb-3 input-Fields'>
                                            <FieldArray name='expFK'>
                                                {fieldArrayProps => {
                                                    const { push, remove, form } = fieldArrayProps
                                                    const { values } = form
                                                    const { expFK } = values
                                                    return (
                                                        <div className='section mb-5'>
                                                            {expFK.map((expFK, index) => (
                                                                <div className="fields2" key={index} >
                                                                    <div className='flex'>
                                                                        <div className='resume-field-inner'>
                                                                            <Field placeholder=" Total Years of Experience" className='form-control mb-3 input-Fields' name={`expFK[${index}].expYear`} type="number" />
                                                                        </div>
                                                                        <div className='resume-field-inner3'>
                                                                            <Field placeholder="Institue Name" className='form-control mb-3 input-Fields' name={`expFK[${index}].expCompanyName`} type="text" />
                                                                        </div>
                                                                        <div className='resume-field-inner2'>
                                                                            <Field placeholder="Description" className='form-control mb-3 input-Fields' name={`expFK[${index}].expDescription`} type="text" />
                                                                        </div>
                                                                        {index > 0 && (
                                                                            <button className='form-control mb-3 btn21' type='button' onClick={() => remove(index)}>-
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div style={{ float: "right" }}>
                                                                <button className='form-control mb-3 btn21' type='button' onClick={() => push('')}>+
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }}
                                            </FieldArray>
                                        </div>
                                    </div>
                                    <div className="input-field2">
                                        <label className='mb-3'> Projects</label>
                                        <div className='flex'>
                                            <div className='resume-field-inner'>
                                                <><label >Project Title</label></>
                                            </div>
                                            <div className='resume-field-inner4'>
                                                <><label >Description</label></>
                                            </div>
                                        </div>
                                        <div className='form-control mb-3 input-Fields'>
                                            <FieldArray name='projFK'>
                                                {fieldArrayProps => {
                                                    const { push, remove, form } = fieldArrayProps
                                                    const { values } = form
                                                    const { projFK } = values
                                                    return (
                                                        <div className='section mb-5'>
                                                            {projFK.map((projFK, index) => (
                                                                <div className="fields2" key={index} >
                                                                    <div className='flex'>
                                                                        <div className='resume-field-inner'>
                                                                            <Field placeholder="Project title" className='form-control mb-3 input-Fields' name={`projFK[${index}].projTitle`} type="text" />
                                                                        </div>
                                                                        <div className='resume-field-inner4'>
                                                                            <Field placeholder="Description" className='form-control mb-3 input-Fields' name={`projFK[${index}].projDescription`} type="text" />
                                                                        </div>
                                                                        {index > 0 && (
                                                                            <button className='form-control mb-3 btn21' type='button' onClick={() => remove(index)}>-
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div style={{ float: "right" }}>
                                                                <button className='form-control mb-3 btn21' type='button' onClick={() => push('')}>+
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }}
                                            </FieldArray>
                                        </div>
                                    </div>
                                    <div className='hello'>
                                        <button className="btn btn-secondary mx-2" type='reset'>Reset</button>
                                        <button
                                            className="btn btn-success"
                                            type='submit'
                                            disabled={!formik.isValid || formik.isSubmitting}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Formik>
    )
}

export default UpdateResume;