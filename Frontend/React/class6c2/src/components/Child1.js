import React from 'react'
import {useContext} from 'react'
const Child1 = (user) => {
    const {age,fname,printtable} = useContext(user)
  return (
    <div>
      <h1>This is child1</h1>
      <p>{age}</p>
      <p></p>
    </div>
  )
}

export default Child1
