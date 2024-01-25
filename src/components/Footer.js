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
          <li><a href='#reservation'>reservation</a></li>
          <li><a href='#order-online'>order online</a></li>
          <li><a href='#login'>login</a></li>
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
          <li><a href='#'>facebook</a></li>
          <li><a href='#'>instagram</a></li>
          <li><a href='#'>X</a></li>
          <li><a href='#'>toctok</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer