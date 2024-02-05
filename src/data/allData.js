import abacha from '../assets/images/foods/Abacha.jpg';
import egbusi from '../assets/images/foods/Egbusi.jpg';
import jollof from '../assets/images/foods/jollof.jpg';

import bruchetta from '../assets/images/foods/bruchetta.svg';
import greekSalad from '../assets/images/foods/greek salad.jpg';
import lemonDessert from '../assets/images/foods/lemon dessert.jpg';
import pastries from '../assets/images/restauranfood.jpg';

const specials = [
    {
        pix: abacha,
        name: 'Abacha',
        price: '24.99',
        desc: 'get your special abacha delicacy delivered to you at your location or for a date after a reservation'
    },
    {
        pix: egbusi,
        name: 'Egbusi Soup',
        price: '17.99',
        desc: 'Get your special Egbusi soup, packed with lots of fish, meat and kanda... You just can’t resist it'
    },
    {
        pix: jollof,
        name: 'Jollof Rice',
        price: '12.99',
        desc: 'Nigerian Jollof just the way you like it. Sweet and yummy. It comes with your favourite white meats and plantain.'
    }
]

const testimonials = [
    {
        pix: bruchetta,
        name: 'Bruchetta',
        desc: 'Review review review review review review review review '
    },
    {
        pix: greekSalad,
        name: 'Greek Salad',
        desc: 'Review review review review review review review review '
    },
    {
        pix: lemonDessert,
        name: 'Lemon Dessert',
        desc: 'Review review review review review review review review '
    },
    {
        pix: pastries,
        name: 'Pastries',
        desc: 'Review review review review review review review review '
    }
]

export {specials, testimonials}