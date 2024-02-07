import {specials} from '../data/allData';

const OrderDelivery = () => {
  return (
    <section className='order-delivery'>
        <img src={specials[0].pix} alt="" />
        <div className='card-details'>
          <div>
            <h2>{specials[0].name}</h2>
            <p>{specials[0].price}</p>
          </div>
          <div className='price-calc'>
              <div>
                  <p>Quantity</p>
                  <span>
                      <span>+</span>
                      <span>{/*specials.num*/} 1 </span>
                      <span>-</span>
                  </span>
              </div>
              <div>
                <p>Total Price</p>
                <p>24.99</p>
              </div>
          </div>
          {/* <div>{specials[0].desc}</div> */}
          <div>add to cart</div>
        </div>
    </section>
  )
}

export default OrderDelivery