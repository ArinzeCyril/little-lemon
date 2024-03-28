import userICN from '../assets/icons/user-regular.svg';
import eyeICN from '../assets/icons/icon _eye_.svg';
import {Link} from 'react-router-dom';

const login = ( { setSignup } ) => {
  return (
    <section className='login-page'>
        <div className='login'>
            <div>
                <h1>One of Us?</h1>
                <h2>login to continue</h2>
            </div>
            <form action="" className='input'>
                <div>
                    <input type="text" placeholder='username' />
                    <img src={userICN} alt="" />
                </div>
                <div>
                    <input type="password" placeholder='password' />
                    <img src={eyeICN} alt="" />
                </div>
                <Link to={'/'}>
                    <input type="button" value="Log In" />
                </Link>
                <p>Forgot passward</p>
                <div className='signup-btn'>
                    <Link to={'/signup'}>
                        <input type="button" value="SignUp" />
                    </Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default login