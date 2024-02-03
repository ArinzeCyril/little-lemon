import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo .svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} />
      </div>
      <nav>
        <h2>dorminant navigation</h2>
        <ul>
          <li><a href='#home'>home</a></li>
          <li><a href='#about'>about</a></li>
          <li><a href='#menu'>menu</a></li>
          <li><Link to={'/reservation'}>reservation</Link></li>
          <li><Link to={'/reservation'}>order online</Link></li>
          <li><Link to={`/login`}>login</Link></li>
        </ul>
      </nav>
      <div>
        <h2>contacts</h2>
        <ul>
          <li><a href='#'>phone number</a></li>
          <li><a href='#'>adress</a></li>
          <li><a href='#'>email</a></li>
        </ul>
      </div>
      <div>
        <h2>social media link</h2>
        <ul>
          <li><a href='https://facebook.com'>facebook</a></li>
          <li><a href='https://instagram.com'>instagram</a></li>
          <li><a href='https://x.com'>X</a></li>
          <li><a href='https://tictok.com'>tictok</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer