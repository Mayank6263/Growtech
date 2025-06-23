import React, { useState } from "react";

const Form1 = () => {
  const [formdata, setformdata] = useState({
    email: "abc@gmail.com",
    age: 33,
    pass: "1233",
  });
  function Submit(e) {
    e.preventDefault();
    console.log(formdata);
  }
  function changeFormdata(e) {
    setformdata((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
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
            value={formdata.email}
            required
            placeholder="Enter your email"
            onChange={(e) => changeFormdata(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formdata.age}
            required
            placeholder="Enter your age"
            onChange={(e) => changeFormdata(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={formdata.pass}
            required
            placeholder="Enter your password"
            onChange={(e) => changeFormdata(e)}
          />
        </div>
        
        <div className="form-group">
          <input type="submit" value="Submit" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default Form1;
