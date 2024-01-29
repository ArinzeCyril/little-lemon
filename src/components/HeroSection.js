import heroImg from '../assets/images/restauranfood.jpg';
import Button from './ReserveTableBTN';

import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className='hero-left'>
            <div>
                <h1>little lemon</h1>
                <h2>nigeria</h2>
            </div>
            <div>
                <p>we are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <p>We are looking forward to serving you</p>
            </div>
            <Button text="Reserve a Table" />
        </div>
        <div className='hero-img'>
            <img src={heroImg}/>
        </div>
    </section>
  )
}

export default HeroSection