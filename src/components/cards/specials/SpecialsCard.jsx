import abachaImg from '../../../assets/images/foods/Abacha.jpg';

const SpecialsCard = (props) => {
  return (
    <div className='special-card'>
      <div><img src={abachaImg} alt="image of daily special meal" /></div>
      <div className='special-card-tittle'>
          <h3>Abacha</h3>
          <p className='food-price'>$24.99</p>
      </div>
      <div>get your special abacha delicacy delivered to you at your location or for a date after a reservation</div>
      <div>
          <p><a href="#">Order a Delivery</a></p>
      </div>
    </div>
  )
}

export default SpecialsCard