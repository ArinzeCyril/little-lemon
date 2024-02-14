import React from 'react'


const SignUpInput = (props) => {

  return (
    <>
        <label htmlFor={props.id}>{props.name}</label>
        <input
          type={props.inpType}
          id={props.id}
          placeholder={props.plcHlder}
          value={props.value}
          onChange={props.onChange}
          onClick={props.onClick}
        />
        <span>{props.more}</span>
    </>
  )
}

export default SignUpInput