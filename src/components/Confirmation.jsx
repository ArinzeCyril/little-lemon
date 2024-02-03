import React from 'react'
// import Header from './Header'
import confirm from '../assets/icons/calendar-check-regular.svg';
import { Link } from 'react-router-dom';

const confirmation = () => {
  return (
    <section>
        {/* <Header /> */}
        <div className="confirmation">
            <img src={confirm} alt="" />
            <h1>Thank You</h1>
            <p>
                Your Reservation Requirement Was Successfully Submitted
            </p>
            <p>
                To check The Details, Go To My Account In The Menu
            </p>
            <button><Link to={'/'}>Go Back To Home Screen</Link></button>
        </div>
    </section>
  )
}

export default confirmation