import { useState } from 'react';
import {specials} from '../data/allData';

const OrderDelivery = ({ setCloseOverlay, pix, name, price }) => {
  const [quantity, setQuantity] = useState(1)
  const add = () => {
    setQuantity(quantity+1)
  }
  const minus = () => {
    quantity > 1 && setQuantity(quantity-1);
  }
  const totalPrice = quantity * price
  const handleClose = () => {
    setCloseOverlay(false)
  }

  return (
    <section className='order-delivery'>
        <img src={pix} alt="" className='delivery-pix' />
        <span onClick={handleClose} className='close'>X</span>
        <div className='card-details'>
          <div>
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
          <div className='price-calc'>
              <div className='order-delivery-calc'>
                  <p>Quantity</p>
                  <span>
                      <span onClick={add}>+</span>
                      <span>{quantity}</span>
                      <span onClick={minus}>-</span>
                  </span>
              </div>
              <div className='order-delivery-total-price'>
                <p>Total Price :</p>
                <p>{Math.floor(totalPrice)}</p>
              </div>
          </div>
          <div className='to-cart'>add to cart</div>
        </div>
    </section>
  )
}

export default OrderDelivery