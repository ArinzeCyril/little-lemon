import './cards/testimonials/testimonials.css';
import TestimonialsCard from './cards/testimonials/TestimonialsCard';

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div><h2>Testimonials</h2></div>
        <div>
            <TestimonialsCard />
        </div>
    </section>
  )
}

export default Testimonials