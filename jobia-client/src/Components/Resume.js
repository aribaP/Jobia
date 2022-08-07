import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Profilee from '../assets/Profile.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Resume = ({ handleOnSave, onChangeTabs }) => {

  const initialvalues = {
    careerObjective: "",
    position: "",
    skills: "",
    linkedIn: "",
    gitHub: "",
    resProj: {
      projeduDegree: "",
      projDescription: ""
    },
    resEdu: {
      eduEndYear: "",
      eduInstituteName: "",
      eduDegree: ""
    },
    resExp: { 
      expCompanyName: "",
      expYear: "",
      expDescription: ""
    }
  };
  const [hideEdu, setShowEdu] = useState(false)
  const [hideExp, setShowExp] = useState(false)

  const [tasksData, setTasksData] = useState([])
  const [task_object, setTaskObject] = useState(initialvalues)
  const [renderUI, setRenderUI] = useState(0)
  const [date_value, setDateValue] = useState("")
  const [finalData, setFinalData] = useState({})

  const [experYear, setExperYear] = useState()

  // console.log('--------experYear----', experYear)
  // console.log('------taskData-------', tasksData.length)
  // console.log('------task_object-------', Object.keys(task_object).length)
  // useEffect(() => { }, [tasksData])

  const onChangeValue = (value, type) => {
    console.log(`${type}: ${value}`)
    console.log(type, value);
    const taskobject = task_object
    taskobject[type] = value
    setTaskObject(taskobject)
    setRenderUI(prev => prev + 1)
  }
  

  // console.log('-------task_object---------', task_object)
  // console.log('-------Task Object---------', task_object)
  const handleOnAddMore = () => {
    const t_data = [...tasksData]
    console.log('----------t_data-------', t_data)
    const task_index = task_object.index
    if (task_index !== undefined) {
      t_data[task_index] = task_object
      t_data[task_index].dueDate = date_value
    } else {
      const taksObject = {
        // id: task_index,
        eduDegree: task_object.eduDegree,
        Institute: task_object.Institute,
        Year: task_object.Year
      }
      t_data.push(taksObject)
    }
    setDateValue("")
    setTaskObject({})
    setTasksData(t_data)
    setFinalData({
      tasks: [...t_data],
    })
  }
  const handleOnSaveFinalData = () => {
    console.log(task_object);
    console.log(tasksData);
  }
  // console.log("===renderUI===", renderUI)


  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  return (
    <div style={{ padding: '30px' }}>
      <div class='row'>
        <div class='col-12 profile-body-right'>
          <div style={{ padding: '30px' }}>

            <label className='mb-3'>Career Objective</label>
            <textarea
              class="form-control mb-3 input-Fields"
              id="careerObjective"
              placeholder="Objective"
              rows="4"
              name='careerObjective'
              value={task_object.careerObjective}
              onChange={(event) => {
                const eventTarget = event.target
                onChangeValue(eventTarget.value, eventTarget.name, 1)
              }} />
            <div className="formErrors text-danger">
              <p>{formErrors.careerObjective}</p>
            </div>


            <label className='mb-3'>Education</label>
            <div className='resume-field padding-10'>
              <div className='flex'>
                <div className='resume-field-inner'>
                  <p className='resume-p'>Degree</p>
                  <p className='resume-p'>Institute</p>
                </div>
                <div className='resume-field-inner2'>
                  <p className='resume-p'>Year of Greduation</p>
                </div>
              </div>
              {hideEdu &&
                tasksData.map((item, i) => {
                  return (
                    <div class="row mb-3">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control input-Fields"
                          placeholder="Degree"
                          aria-label="Degree"
                          name='eduDegree'
                          value={item?.education.eduDegree ?? ""}
                          // disabled
                          onChange={(event) => {
                            const eventTarget = event.target
                            onChangeValue(eventTarget.value, eventTarget.name, i)

                          }}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control input-Fields"
                          placeholder="Institute"
                          aria-label="Institute"
                          name='Institute'
                          value={item?.Institute ?? ""}
                          // disabled
                          onChange={(event) => {
                            const eventTarget = event.target
                            onChangeValue(eventTarget.value, eventTarget.name, i)
                          }}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control input-Fields"
                          placeholder="Year"
                          aria-label="Year"
                          name='Year'
                          value={item?.Year ?? ""}
                          // disabled
                          onChange={(event) => {
                            const eventTarget = event.target
                            onChangeValue(eventTarget.value, eventTarget.name, i)
                          }}
                        />
                      </div>
                      {/* <div style={{ marginTop: '10px', justifyContent: 'flex-end', display: 'flex' }}>
                        <button className='btn-resume'
                        // onClick={() => {
                        //   setTaskObject({ ...item, index: i })
                        // }}
                        > Edit </button>
                      </div> */}
                    </div>
                  )
                })
              }
              {hideEdu && (tasksData?.length < 3 || Object.keys(task_object).length > 0) &&
                <div class="row mb-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control input-Fields"
                      placeholder="Degree"
                      name='eduDegree'
                      value={task_object?.eduDegree ?? ""}
                      required
                      onChange={(event) => {
                        const eventTarget = event.target
                        onChangeValue(eventTarget.value, eventTarget.name)
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control input-Fields"
                      placeholder="Institute"
                      aria-label="Institute"
                      name='Institute'
                      value={task_object?.Institute ?? ""}
                      required
                      onChange={(event) => {
                        const eventTarget = event.target
                        onChangeValue(eventTarget.value, eventTarget.name)
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control input-Fields"
                      placeholder="Year"
                      aria-label="Year"
                      name='Year'
                      value={task_object?.Year ?? ""}
                      required
                      onChange={(event) => {
                        const eventTarget = event.target
                        onChangeValue(eventTarget.value, eventTarget.name)
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '10px', justifyContent: 'flex-end', display: 'flex' }}>
                    <button className='btn-resume'
                      onClick={() => handleOnAddMore()}
                    > Add</button>
                  </div>
                </div>
              }
              {(tasksData?.length === 3) &&
                <div style={{ marginTop: '10px', justifyContent: 'flex-end', display: 'flex' }}>

                  <button className='btn-resume'
                    onClick={() => handleOnSaveFinalData()}
                  > Save & Continue</button>
                </div>
              }

              <button className='btn-resume'
                onClick={() => setShowEdu(!hideEdu)}
              > Add education</button>
            </div>


            <label className='mb-3 mt-15'>Experience</label>
            <div className='resume-field padding-10'>
              <div className='flex'>
                <div className='resume-field-inner-exp'>
                  <p className='resume-p'>Years of Experience</p>
                  {/* <p className='resume-p'>Job Position</p>
                  <p className='resume-p'>Job Description</p> */}
                </div>
              </div>
              {hideExp &&
                <div class="row mb-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control input-Fields"
                      placeholder="Year Of Experience"
                      name='eduDegree'
                      value={experYear ?? ""}
                      required
                      onChange={(event) => {
                        const eventTarget = event.target
                        setExperYear(eventTarget.value)
                      }}
                    />
                  </div>
                </div>

              }
              <button className='btn-resume'
                onClick={() => setShowExp(!hideExp)}
              > Add experience</button>
            </div>

            {/* <label className='mb-3 mt-15'>Project</label>
            <div>
              <button className='btn-resume ml-15'> Add Projects</button>
            </div>
            <div className='resume-brdr'></div> */}

            <label className='mb-3 mt-15'> Skill set</label>
            <textarea
              class="form-control mb-3 input-Fields"
              id="skills"
              placeholder="Add your technical and core skills here"
              rows="4"
              name='skills'
              value={task_object.skills}
              onChange={(event) => {
                const eventTarget = event.target
                onChangeValue(eventTarget.value, eventTarget.name, 1)
              }} />
            <div className="formErrors text-danger">
              <p>{formErrors.skills}</p>
            </div>

            <label className='mb-3 mt-15'>Linkedin Profile URL</label>
            <textarea
              class="form-control mb-3 input-Fields"
              id="linkedIn"
              placeholder=""
              rows="1"
              name='linkedIn'
              value={task_object.linkedIn}
              onChange={(event) => {
                const eventTarget = event.target
                onChangeValue(eventTarget.value, eventTarget.name, 1)
              }} />
            <div className="formErrors text-danger">
              <p>{formErrors.linkedIn}</p>
            </div>

            <label className='mb-3 mt-15'>Github Link</label>
            <textarea
              class="form-control mb-3 input-Fields"
              id="gitHub"
              placeholder=""
              rows="1"
              name='gitHub'
              value={task_object.gitHub}
              onChange={(event) => {
                const eventTarget = event.target
                onChangeValue(eventTarget.value, eventTarget.name, 1)
              }} />
            <div className="formErrors text-danger">
              <p>{formErrors.gitHub}</p>
            </div>



            <form className="d-flex justifyContent width-100">
              <Link to='/account'><button className="btn body-button-style2 padding-l-15 padding-r-15" type="submit">Cancel</button></Link>&nbsp;
              <Link to='/account'><button className="btn body-button-style3 btn-sm" type="submit" onClick={handleOnSaveFinalData}>Save</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}


export default Resume