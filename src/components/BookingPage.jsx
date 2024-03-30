import { useNavigate } from 'react-router-dom'
import BookingForm from './BookingForm'
import { useState } from 'react';

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

return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        tableNo={tableNo}
        setTableNo={setTableNo}
        terms={terms}
        setTerms={setTerms}
        navigate={navigate}
      />
    </div>
  )
}

export default BookingPage