import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav';
import logo from '../assets/images/Logo .svg';
import menu from '../assets/icons/bars-solid.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(true)
  const [mobileNav, setMobileNav] = useState('mobile-nav-close')
  const location = useLocation()

  const handleToggle = () => {
    setToggle(!toggle)
    if (toggle){
      setMobileNav('mobile-nav-toggle')
    }else{
      setMobileNav('mobile-nav-close')
    }
  }
  useEffect(() => {
    if (mobileNav==='mobile-nav-toggle') {
      setToggle(!toggle)
      setMobileNav('mobile-nav-close')
    }
  }, [location])
  return (
    <header>
      <div className='mobile'>
        <div className='mobile-nav'>
          <Link to={'/'}>
            <img src={logo} alt='logo' className='mobile-logo' />
          </Link>
          <div>
            <img
              onClick={handleToggle}
              src={menu} alt='menu'
              className='mobile-menu'
            />
          </div>
        </div>
        <div className={mobileNav}>
          <Nav
            toggle={toggle}
            setToggle={setToggle}
          />
        </div>
      </div>
      <div className='desktop'>
        <Link to={'/'}>
          <img src={logo} alt='logo' />
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header