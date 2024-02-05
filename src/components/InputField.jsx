import React from 'react'


const SignUpInput = (props) => {
  // const required = props.required && required

  return (
    <>
        <label htmlFor={props.id}>{props.name}</label>
        <input type={props.inpType} id={props.id} placeholder={props.plcHlder} />
        <span>{props.more}</span>
    </>
  )
}

export default SignUpInput