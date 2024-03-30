import { Link, useNavigate } from 'react-router-dom'
import BookingForm from './BookingForm'
import { useEffect, useReducer, useState } from 'react';
import {reservations} from '../data/reservations';


const BookingPage = () => {
  const navigate = useNavigate()

  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ])

  const [terms, setTerms] = useState(false)
  console.log(`terms: ${terms}`);
  const [tableNo, setTableNo] = useState(1)
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
    <div>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        handleSubmit={handleSubmit}
        reserve={reserve}
        setReserve={setReserve}
        tableNo={tableNo}
        setTableNo={setTableNo}
        terms={terms}
        setTerms={setTerms}
        doubleReservation={doubleReservation}
        err={err}
      />
    </div>
  )
}

export default BookingPage