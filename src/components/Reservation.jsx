import { Link } from 'react-router-dom'
import InputField from './InputField';

const Reservation = () => {
  return (
    <section>
        <div className="reservation">
            <h1>Reservation Details</h1>
            <form action="">
                <InputField inpType='date' id='date' name='Date*'  />
                <InputField inpType='time' id='time' name='Time*'  />
                <div className='guest-no'>
                    <p>Table for*</p>
                    <span id='addBtn'>+</span>
                    <span>1</span>
                    <span id='minusBtn'>-</span>
                </div>
                <InputField inpType='text' id="specialReq" name='Special Request [Optional]'  />
                <div className='terms'><InputField inpType='radio' id='radioBtn' more='I agree to the Little Lemon Reservation polivy'  /></div>
                <button><Link to={'/confirmation'}>Confirm Reservation</Link></button>
            </form>
        </div>
    </section>
  )
}

export default Reservation