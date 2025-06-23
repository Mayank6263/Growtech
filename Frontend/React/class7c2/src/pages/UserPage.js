import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../components/nav.css'
import { Increase ,ChangeName} from '../slices/User'


const UserPage = () => {
  const nm = useSelector((state)=>state.user.name)
  const age = useSelector((state)=>state.user.age)
  const mail = useSelector((state)=>state.user.email)
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="panel-container">
      <h2>This is User</h2>
      <p>Name :- {nm}</p>
      <button onClick={()=>dispatch(ChangeName("Userchanged"))}>Change Name</button>
      <p>Age :- {age}</p>
      <button onClick={()=>dispatch(Increase())}>+</button>
      <p>Mail id :- {mail}</p>
      <button onClick={() => nav('/')}>Switch to Admin</button>
    </div>
  )
}

export default UserPage
