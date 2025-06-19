import React from 'react'
import Child3 from './Child3'
const Child2 = ({name}) => {
  return (
    <div>
      <Child3 name={name}></Child3>
    </div>
  )
}

export default Child2
