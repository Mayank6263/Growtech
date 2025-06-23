import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../components/nav.css";
import { Increase,ChangeName1 } from "../slices/Admin";

const AdminPage = () => {
  const dispatch = useDispatch();
  const nm = useSelector((state) => state.Admin.name);
  const age = useSelector((state) => state.Admin.age);
  const mail = useSelector((state) => state.Admin.email);
  const nav = useNavigate();

  return (
    <div className="panel-container">
      <h2>This is Admin</h2>
      <p>Name :- {nm}</p>
      <button onClick={()=>dispatch(ChangeName1("Admin Changed"))}>Change Name</button>
      <p>Age :- {age}</p>
      <button onClick={() => dispatch(Increase())}>+</button>
      <p>Mail id :- {mail}</p>
      <button onClick={() => nav("/userpage")}>Switch to User</button>
    </div>
  );
};

export default AdminPage;
