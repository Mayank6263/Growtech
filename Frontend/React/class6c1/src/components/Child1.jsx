import React from 'react'
import Child2 from "./Child2"
const Child1 = ({name}) => {
  return (
    <div>
      <Child2 name={name}></Child2>
    </div>
  )
}

export default Child1
