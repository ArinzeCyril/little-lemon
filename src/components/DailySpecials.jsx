import './cards/specials/specials.css'
import SpecialCard from './cards/specials/SpecialsCard';
import Button from './ReserveTableBTN';

const DailySpecials = () => {
  return (
    <section className='daily-specials'>
      <div>
        <h2>Specials</h2>
        <Button text="Order Online" />
      </div>
      <SpecialCard />
    </section>
  )
}

export default DailySpecials