import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink as HLink } from 'react-router-hash-link';

const Nav = () => {

  return (
    <nav className='main-nav'>
      <ul>
        <li><HLink to={'/#home'} smooth>home</HLink></li>
        <li><HLink to={'/#menu'} smooth>menu</HLink></li>
        <li><HLink to={'/#about'} smooth>about</HLink></li>
        <li><Link to={'/reservation'}>reservation</Link></li>
        <li><Link to={'/order'}>order online</Link></li>
        <li><Link to={`/login`}>login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav