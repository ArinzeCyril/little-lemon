import './cards/specials/specials.css'
import SpecialCard from './cards/specials/SpecialsCard';
import OrderDelivery from './OrderDelivery';
import Button from './ReserveTableBTN';
import {specials} from '../data/allData';

const DailySpecials = () => {
  const dailySpecials = specials.map(card => {
    return (<>
      <SpecialCard
        key={card.id}
        pix={card.pix}
        name={card.name}
        price={card.price}
        desc={card.desc}
      />
    </> )
  })
  const links = window.location.href.toString()
  const linkArr = links.split('/')
  const linkPositionIndex = linkArr.length-1
  const linkPosition = linkArr[linkPositionIndex]
  console.log(linkPosition)
  return (
    <section id='menu' className='daily-specials'>
      <div>
        <h2>Specials</h2>
        {linkPosition === "order" ? (
          <Button text='Order Online'/>
        ) : (
          <Button text='Order Online' link={"order"} />
        )}
      </div>
      <div className='cards'>{dailySpecials}</div>
    </section>
  )
}

export default DailySpecials