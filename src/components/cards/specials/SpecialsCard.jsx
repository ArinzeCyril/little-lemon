import { useState } from 'react';
import OrderDelivery from '../../OrderDelivery';

const SpecialsCard = (props) => {
  const [closeOverlay, setCloseOverlay] = useState(false)
  const handleButtonClick = (e) => {
    setCloseOverlay(true);
  }
  return (
    <div className='special-card'>
      <div><img src={props.pix} alt="daily special meal" /></div>
      <div className='special-card-tittle'>
          <h3>{props.name}</h3>
          <p className='food-price'>{props.price}</p>
      </div>
      <div>{props.desc}</div>
      <div>
        <p className='order-delivery-btn' onClick={handleButtonClick}>Order a Delivery</p>
      </div>
      {closeOverlay ?
        <OrderDelivery
          setCloseOverlay={setCloseOverlay}
          pix={props.pix}
          name={props.name}
          price={props.price}
        /> :
        ''
      }
    </div>
  )
}

export default SpecialsCard