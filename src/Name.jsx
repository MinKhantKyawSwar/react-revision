import React from 'react'

const Name = (props) => {
  return (
    <div className='Name'>
        <p>name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Student :{props.isStudent ? "Yes" : "No" }</p>
        <button></button>
    </div>
  )
}

export default Name