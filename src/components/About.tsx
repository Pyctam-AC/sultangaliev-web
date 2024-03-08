import { FC } from 'react';
import Heading from './Heading';
import myImg from '../images/about.png';

const About:FC = () => {
  return (
    <section className="section about-section" id="about">
      <div className="about">
        <div className="about_text">
          <Heading text="About Me" />
          <p>Hello! My name is Rustam Sultangaliev and I am a Frontend Developer. And this page is about me.</p>
          <p>I specialize in building good-looking and reliable front-end (and occasionally back-end) for different services and applications.</p>
        </div>
        <div className="about_img">
          <img src={myImg} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default About;
