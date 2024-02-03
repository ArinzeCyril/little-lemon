import { Link } from 'react-router-dom'
import React from 'react'

const ReserveTableBTN = ({text}) => {
  return (
    <button>
      <Link to={'/reservation'} >
        {text}
      </Link>
    </button>
  )
}

export default ReserveTableBTN