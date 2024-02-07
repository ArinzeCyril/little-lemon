const SpecialsCard = (props) => {
  return (
    <div className='special-card'>
      <div><img src={props.pix} alt="daily special meal" /></div>
      <div className='special-card-tittle'>
          <h3>{props.name}</h3>
          <p className='food-price'>{props.price}</p>
      </div>
      <div>{props.desc}</div>
      <div>
          <p onClick={props.onClick}>Order a Delivery</p>
      </div>
    </div>
  )
}

export default SpecialsCard