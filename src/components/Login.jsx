import Header from './Header';
import userICN from '../assets/icons/user-regular.svg';
import eyeICN from '../assets/icons/icon _eye_.svg';

const login = () => {
  return (
    <section className='login-page'>
        <Header />
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
                <input type="button" value="Log In" />
                <p>Forgot passward</p>
            </form>
        </div>
    </section>
  )
}

export default login