// import Header from './Header'
import Input from './InputField';
import userICN from '../assets/icons/user-regular.svg';
import passwordICN from '../assets/icons/icon _eye_.svg';

const SignUp = () => {
  return (
    <section>
        {/* <Header /> */}
        <div className="signup">
            <h1>Sign Up</h1>
            <form action="">
                <Input id="first-name" inpType='text' name='First Name' />
                <Input id="last-name" inpType='text' name='Last Name' />
                <Input id="email" inpType='email' name='Email' />
                <Input id="phone" inpType='number' name='Phone Number' />
                <div>
                    <Input id="phone" inpType='text' plcHlder='username' />
                    <img src={userICN} alt="" />
                </div>
                <div>
                    <Input id="phone" inpType='password' plcHlder='password' />
                    <img src={passwordICN} alt="" />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    </section>
  )
}

export default SignUp
