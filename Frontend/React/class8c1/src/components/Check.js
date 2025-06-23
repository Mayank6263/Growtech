import React, { useState } from 'react'
import "./check.css"
const Check = () => {
  const [data,setdata]=useState({
    email:"abc@gmail.com",
    gender:"",
    skills:[],
    file:""
  })
  function Submit(e){
    e.preventDefault();
    console.log(data)
  }
  return (
    <div className='form-container'>
        <form onSubmit={Submit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' onChange={(e)=>{setdata((old)=>{return {...old,[e.target.name]:e.target.value}})}} value={data.email}/>
          </div>
          <div className='form-group'>
            <label htmlFor="gender">Gender</label>
            <input type="radio" name='gender'/>Male
            <input type="radio" name='gender'/>Female
            <input type="radio" name='gender'/>Others
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input type="checkbox" />Reactjs
            <input type="checkbox" />Nodejs
            <input type="checkbox" />Expressjs
          </div>
          <div className="form-group">
            <label htmlFor="file">Resume</label>
            <input type="file" id='file' />
          </div>
          <div className="form-group">
            <input type="submit" value={"Submit"} />
          </div>
        </form>
      
    </div>
  )
}

export default Check
