import React from 'react'

const Button = () => {

    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name}, you clicked me ${count} times!`)
        }
        else{
            console.log(`${name}, stop clicking me`)
        }
    } 

    const handleClick2 = (name) => {
        alert(`${name} stop clicking me`)
    } 

    const handleClick3 = (e) => e.target.textContent =" ouch" 
  return (
    <button onClick={(e)=>handleClick3(e)}>Click me</button>
  )
}

export default Button