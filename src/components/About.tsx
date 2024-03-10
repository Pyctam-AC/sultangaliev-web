import { FC, useContext } from 'react';
import Heading from './Heading';
import myImg from '../images/about.png';
import LangContexts from '../contexts/LangContexts';
import { headingText, aboutMeText } from '../utils/textsPage';

const About:FC = () => {

  const lang = useContext(LangContexts);

  return (
    <section className="section about-section" id="about">
      <div className="about">
        <div className="about_text">
          <Heading text={headingText[lang].about} />
          <p>{aboutMeText[lang].par_1}</p>
          <p>{aboutMeText[lang].par_2}</p>
        </div>
        <div className="about_img">
          <img src={myImg} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default About;
