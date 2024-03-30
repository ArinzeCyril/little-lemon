import { useState } from 'react';

function GuestDetails({tableNo, setTableNo}) {
  const add = () => {
    tableNo < 10 && setTableNo(tableNo+1)
  }
  const minus = () => {
    tableNo > 1 && setTableNo(tableNo-1);
  }

  return (
    <div className='guest-no' data-testid='guest'>
        <p>Table for*</p>
        <span id='addBtn' data-testid='addOne' onClick={add}>+</span>
        <span id='currentNumber' data-testid='guestNumber'>{tableNo}</span>
        <span id='minusBtn' onClick={minus}>-</span>
    </div>
  )
}

export default GuestDetails