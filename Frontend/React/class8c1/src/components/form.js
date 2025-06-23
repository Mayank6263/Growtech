import React, { useState } from 'react';
import './FormComponent.css'; // Import external CSS

const FormComponent = () => {
    const [email,setemail]= useState("abc@gmail.com")
    const [pass,setpass]= useState("123123")

    function Submit(e){
        e.preventDefault();
        console.log(email,pass)
    }
  return (
    <div className="form-container">
      <form onSubmit={Submit}>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                value={email}
                required 
                placeholder="Enter your email"
                onChange={(e)=>{setemail(e.target.value)}}

            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input 
                type="password" 
                id="pass" 
                name="pass"
                value={pass}
                required 
                placeholder="Enter your password" 
                onChange={(e)=>{setpass(e.target.value)}}
            />
        </div>
        <div className="form-group">
          <input type="submit"  value="Submit" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
