const TestimonialsCard = (props) => {
  return (
    <div className='testimonials-card'>
        <div className='rating'><p>Rating</p></div>
        <div className='img-details'>
            <img src={props.pix} alt={`review for ${props.name}`} />
            <p>{props.name}</p>
        </div>
        <div className='description'>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default TestimonialsCard