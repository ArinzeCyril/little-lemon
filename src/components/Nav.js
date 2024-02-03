import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
  const handleNavAuth = () => {

  }
  const signupState = () => {
    props.setSignup(!props.signup)
  }
  console.log(props.signup);
  return (
    <nav className='main-nav'>
      <ul>
        <li><Link to={'/'}>home</Link></li>
        <li><a href='#menu'>menu</a></li>
        <li><a href='#about'>about</a></li>
        <li><Link to={'/reservation'}>reservation</Link></li>
        <li><Link to={'/reservation'}>order online</Link></li>
        <li><Link to={`/login`} onClick={signupState()}>login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav