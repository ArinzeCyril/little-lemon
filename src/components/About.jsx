import pix1 from '../assets/images/Mario and Adrian A.jpg';
import pix2 from '../assets/images/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className='abouts'>
        <div>
            <div>
                <h2>Little Lemon</h2>
                <h3>Nigeria</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error iste
                fugiat, laborum dicta nostrum ullam totam quae illum, doloribus iusto beatae
                natus autem accusantium, sapiente earum in perspiciatis? Corporis.
                Exercitationem, tenetur quis id eius ut perferendis veniam expedita, architecto,
                error dolor quasi molestiae labore ipsa natus non? Aspernatur nulla ipsa totam
                quidem mollitia, odit maiores ad quos provident et.
            </p>
        </div>
        <div className='about-img'>
            <img src={pix1} alt="" />
            <img src={pix2} alt="" />
        </div>
    </section>
  )
}

export default About