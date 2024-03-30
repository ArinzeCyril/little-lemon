import InputField from './InputField';
import GuestDetails from './GuestDetails';
import { useEffect, useState } from 'react';
import {reservations} from '../data/reservations';

const Reservation = (
  {
    availableTimes,
    tableNo,
    setTableNo,
    terms,
    setTerms,
    navigate
  }) => {

  const [occasion, setOccasion] = useState([
    'Birthday',
    'Anniversary'
  ])

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
  const setTime = availableTimes && availableTimes.map(time => {
    return <option key={time}>{time}</option>
  })
  const occasions = occasion.map(feast => {
    return <option key={feast}>{feast}</option>
  })

  const [reserve, setReserve] = useState({
    date: '',
    time: '17:00',
    table: tableNo,
    specialReq: '',
    agree: !terms
  })
  let doubleReservation

  const handleSubmit = e => {
    let doublReservation = false

    e.preventDefault()

    reservations.map(reservation => {
      const locDetail = reserve.date + reserve.time
      const remDetail = reservation.date + reservation.time

      if (locDetail == remDetail){
        doublReservation = true
        setErr(errorMsg)
      } else {
        doublReservation = false
        reservations.push(reserve)
      }
      doubleReservation = doublReservation
    })
    if (!doublReservation){
      navigate('/confirmation')
    }
  }

  const [err, setErr] = useState('')

  const errorMsg = <p className='err'>A reservation has been made for the time you selected. Please select a diferent time or date</p>

  useEffect(() => {
    setErr('')
  },[reserve])

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
            onChange={e => { setReserve({ ...reserve, date: e.target.value }) }}
          />
          <label htmlFor="res-time">Choose time</label>
          <div className='select-times'>
            <select
              id="res-time "
              className='select-time'
              onChange={e => { setReserve({ ...reserve, time: e.target.value }) }}
            >
              {setTime}
            </select>
          </div>
          <GuestDetails
            tableNo={tableNo}
            setTableNo={setTableNo}
          />
          <label htmlFor="occasion">Occasion</label>
          <div>
            <select id="occasion">
              {occasions}
            </select>
          </div>
          <InputField
            inpType='text'
            id="specialReq"
            name='Special Request [Optional]'
            value={reserve.specialReq}
            onChange={e => { setReserve({ ...reserve, specialReq: e.target.value }) }}
          />
          <div className='terms'>
            <InputField
              inpType='checkbox'
              id='radioBtn'
              more='I agree to the Little Lemon Reservation polivy'
              onClick={handleTerms}
            />
          </div>
          {err}
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