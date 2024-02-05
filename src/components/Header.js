import { Link } from 'react-router-dom'
import Nav from './Nav';
import logo from '../assets/images/Logo .svg';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} alt='logo' />
      </Link>
      <Nav />
    </header>
  )
}

export default Header