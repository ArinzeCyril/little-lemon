import { Link, useNavigate } from 'react-router-dom'
import InputField from './InputField';
import { useState } from 'react';

const Reservation = () => {
  const navigate = useNavigate()
  const [tableNo, setTableNo] = useState(1)
  const [terms, setTerms] = useState(false)
  const [reserve, setReserve] = useState({
    date: '',
    time: '',
    table: tableNo,
    specialReq: '',
    agree: terms
  })

  const add = () => {
    setTableNo(tableNo+1)
  }
  const minus = () => {
    setTableNo(tableNo-1)
  }
  const handleSubmit = e => {
    e.preventDefault()
    navigate('/confirmation')
  }
  const handleTerms = () => {
    setTerms(!terms)
  }
  const isFormValid = () => {
    return (
      reserve.date &&
      reserve.time &&
      terms
    )
  }
  console.log(`date: ${reserve.date}`);
  console.log(`time: ${reserve.time}`);
  console.log(`agree: ${reserve.agree}`);
  console.log(`terms: ${terms}`);

  return (
    <section>
        <div className="reservation">
            <h1>Reservation Details</h1>
            <form onSubmit={handleSubmit} >
                <InputField
                  inpType='date'
                  id='date'
                  name='Date*'
                  value={reserve.date}
                  onChange={e => {setReserve({...reserve, date: e.target.value})}}
                />
                <InputField
                  inpType='time'
                  id='time'
                  name='Time*'
                  value={reserve.time}
                  onChange={e => {setReserve({...reserve, time: e.target.value})}}
                />
                <div className='guest-no'>
                    <p>Table for*</p>
                    <span id='addBtn' onClick={add}>+</span>
                    <span>{tableNo}</span>
                    <span id='minusBtn' onClick={minus}>-</span>
                </div>
                <InputField
                  inpType='text'
                  id="specialReq"
                  name='Special Request [Optional]'
                  value={reserve.specialReq}
                  onChange={e => {setReserve({...reserve, specialReq: e.target.value})}}
                />
                <div className='terms'>
                  <InputField
                    inpType='checkbox'
                    id='radioBtn'
                    more='I agree to the Little Lemon Reservation polivy'
                    onClick={handleTerms}
                  />
                </div>
                <button
                  disabled={!isFormValid()}
                >
                  Confirm Reservation
                </button>
            </form>
        </div>
    </section>
  )
}

export default Reservation