import pix from '../../../assets/images/foods/bruchetta.svg';

const TestimonialsCard = () => {
  return (
    <div className='testimonials-card'>
        <div className='rating'><p>Rating</p></div>
        <div className='img-details'>
            <img src={pix} alt={`${pix} image`} />
            <p>Bruchetta</p>
        </div>
        <div className='description'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
                laboriosam nihil excepturi molestias autem accusantium maxime tempore
            </p>
        </div>
    </div>
  )
}

export default TestimonialsCard