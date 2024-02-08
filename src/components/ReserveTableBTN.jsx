import { Link } from 'react-router-dom'
import React from 'react'

const ReserveTableBTN = ({text, link}) => {
  return (
    <button>
      <Link to={link} >
        {text}
      </Link>
    </button>
  )
}

export default ReserveTableBTN