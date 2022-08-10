import * as Yup from 'yup'
// import TextError from './TextError'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const onSubmit = (values, submitProps) => {
  const body = {
    careerObjective: values.careerObjective,
    eduFK: [values.eduFK]
  }

  console.log('form data', values);
  console.log('form data', body);
  try {
    axios.post("http://localhost:5000/resume/addwhole", [values])
      .then((response) => {
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
  if (!value) {
    error = 'Required'
  }
  return error
}


function Resume() {
  const [formValues, setFormValues] = useState(null)
  return (
    <Formik
      initialValues={formValues || initialValues}
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
          <div className="container" >
            <Form action="#" >
              <div className="form-first">
                <div className="detail personal">
                  <span className="title"></span> Resume Creation Form

                  <div className='fields'>
                    <div className="input-fields">
                      <label htmlFor='careerObjective'>careerObjective</label>
                      <Field type='text' id='careerObjective' name='careerObjective' />
                    </div>


                    <div className="input-fields">
                      <label htmlFor='position'>position</label>
                      <Field type='text' id='position' name='position' />
                    </div>

                    <div className="input-fields">
                      <label htmlFor='skills'>skills</label>
                      <Field type='text' id='skills' name='skills' validate={validateComments} />
                    </div>

                    <div className="input-fields">
                      <label htmlFor='linkedIn'>linkedIn</label>
                      <Field type='text' id='linkedIn' name='linkedIn' validate={validateComments} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-field2">
                <label>Education</label>
                <div className='input-fields2'>
                  <><label >Year</label></>
                  <><label >Institute Name</label></>
                  <><label >Degree</label></>
                </div>
                <div className='input-fields2'>
                  <FieldArray name='eduFK'>
                    {fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps
                      const { values } = form
                      const { eduFK } = values
                      return (

                        <div className='section'>

                          {eduFK.map((eduFK, index) => (
                            <div className="fields2" key={index} >


                              <div className='input-fields2'>
                                <Field placeholder="Year" name={`eduFK[${index}].eduEndYear`} type="number" />
                              </div>

                              <div className='input-fields2'>
                                <Field placeholder="Institue Name" name={`eduFK[${index}].eduInstituteName`} type="text" />
                              </div>

                              <div className='input-fields2'>
                                <Field placeholder="Degree" name={`eduFK[${index}].eduDegree`} type="text" />
                              </div>

                              {index > 0 && (

                                <button className='btn2' type='button' onClick={() => remove(index)}>-
                                </button>

                              )}
                            </div>
                          ))}


                          <div className='btn'>
                            <button className='btn' type='button' onClick={() => push('')}>+
                            </button>
                          </div>

                        </div>
                      )
                    }}
                  </FieldArray>
                </div>
              </div>
              <div className="input-field2">
                <label>Experience</label>
                <div className='input-fields2'>
                  <><label >Total Years of experience </label></>
                  <><label >Institute Name</label></>
                  <><label >Description</label></>
                </div>
                <div className='input-fields2'>
                  <FieldArray name='expFK'>
                    {fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps
                      const { values } = form
                      const { expFK } = values
                      return (

                        <div className='section'>

                          {expFK.map((expFK, index) => (
                            <div className="fields2" key={index} >

                              <div className='input-fields2'>
                                <Field placeholder=" Total Years of Experience" name={`expFK[${index}].expYear`} type="number" />
                              </div>

                              <div className='input-fields2'>
                                <Field placeholder="Institue Name" name={`expFK[${index}].expCompanyName`} type="text" />
                              </div>

                              <div className='input-fields2'>
                                <Field placeholder="Description" name={`expFK[${index}].expDescription`} type="text" />
                              </div>

                              {index > 0 && (

                                <button className='btn2' type='button' onClick={() => remove(index)}>-
                                </button>

                              )}
                            </div>
                          ))}


                          <div className='btn'>
                            <button className='btn' type='button' onClick={() => push('')}>+
                            </button>
                          </div>

                        </div>
                      )
                    }}
                  </FieldArray>
                </div>
              </div>

              <div className="input-field2">
                <label>Projects</label>
                <div className='input-fields2'>
                  <><label >Project Title</label></>
                  <><label >Description</label></>
                </div>
                <div className='input-fields2'>
                  <FieldArray name='projFK'>
                    {fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps
                      const { values } = form
                      const { projFK } = values
                      return (

                        <div className='section'>

                          {projFK.map((projFK, index) => (
                            <div className="fields2" key={index} >


                              <div className='input-fields2'>
                                <Field placeholder="Project title" name={`projFK[${index}].projTitle`} type="text" />
                              </div>

                              <div className='input-fields2'>
                                <Field placeholder="Description" name={`projFK[${index}].projDescription`} type="text" />
                              </div>

                              {index > 0 && (

                                <button className='btn2' type='button' onClick={() => remove(index)}>-
                                </button>

                              )}
                            </div>
                          ))}


                          <div className='btn'>
                            <button className='btn' type='button' onClick={() => push('')}>+
                            </button>
                          </div>

                        </div>
                      )
                    }}
                  </FieldArray>
                </div>
              </div>

              <button type='button' >
                Load saved data
              </button>
              <button type='reset'>Reset</button>
              <button
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>

            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default Resume;