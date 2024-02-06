import './cards/testimonials/testimonials.css';
import TestimonialsCard from './cards/testimonials/TestimonialsCard';
import {testimonials} from '../data/allData';

const Testimonials = () => {
  const testinobialSection = testimonials.map(testimoney => {
    return <TestimonialsCard
      key={testimoney.id}
      pix={testimoney.pix}
      name={testimoney.name}
      desc={testimoney.desc}
    />
  })
  return (
    <section className='testimonials'>
        <div><h2>Testimonials</h2></div>
        <div className='cards'>
            {testinobialSection}
        </div>
    </section>
  )
}

export default Testimonials