import React from 'react'
import { useContext } from 'react'
import { mycontext } from '../../App'
function Datatwo() {
    const course = useContext(mycontext)
  return (
    <div>
       <h1>Data Two Component</h1>
       <h3>{course}</h3>
    </div>
  )
}

export default Datatwo
