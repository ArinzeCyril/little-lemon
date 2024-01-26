import './cards/specials/specials.css'
import SpecialCard from './cards/specials/SpecialsCard';

const DailySpecials = () => {
  return (
    <section className='daily-specials'>
      <div>
        <h2>Specials</h2>
        <button>Order Online</button>
      </div>
      <SpecialCard />
    </section>
  )
}

export default DailySpecials