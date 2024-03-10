import { FC, useContext } from "react";
import ProjectCard from "./ProjectCard";
import Heading from './Heading';

import homebuddy from '../images/projects-screenshots/homebuddy.svg';
import indiepub from '../images/projects-screenshots/indiepub.svg';
import vtbApi from '../images/projects-screenshots/vtb_api.svg';
import telegram from '../images/telegram-pngegg.png'
import LangContexts from "../contexts/LangContexts";
import { headingText, portfolioText } from "../utils/textsPage";

const myWorks = [
  {
    id: 1,
    image: homebuddy,
    title: 'Homebuddy',
    description: "Home Improvement Helper",
    url:'https://www.homebuddy.com/',
    className: 'hb',
  },
  {
    id: 2,
    image: vtbApi,
    title: 'VTB API',
    description: "FinTech: API Portal for bank services",
    url:'https://developers.vtb.ru/',
    className: 'vtb',
  },
  {
    id: 3,
    image: indiepub,
    title: 'Indiepub',
    description: 'Innovative text-to-audiobook converter',
    url:'https://indiepub.ai/',
    className: 'indiepub',
  },
]

const Portfolio:FC = () => {

  const lang = useContext(LangContexts);

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="portfolio">
        <div className="portfolio_heading">
          <Heading text={headingText[lang].portfolio} />
          <p>{portfolioText[lang].par_1}</p>
          <p>{portfolioText[lang].par_2}
            <span className="portfolio_heading_contact">
              <a className="accent-link" href="https://t.me/pyctamAC" target="_blank">
                <img className='portfolio_heading_contact__logo' src={telegram} />
                {portfolioText[lang].rich_me}
              </a>
            </span>
          </p>
        </div>
        <div className="project-cards">
          {
            myWorks.map((proj) => {
              return <ProjectCard key={proj.title} projectImg={proj.image} title={proj.title} description={proj.description} url={proj.url} className={proj.className || ""}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
