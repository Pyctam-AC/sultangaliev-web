import { FC, useContext } from "react";
import ProjectCard from "./ProjectCard";
import Heading from './Heading';
import erc from '../images/projects-screenshots/erc_logo.png';
import poidem from '../images/projects-screenshots/poidem-bank-logo.svg'
import telegram from '../images/telegram-pngegg.png'
import LangContexts from "../contexts/LangContexts";
import { headingText, portfolioText } from "../utils/textsPage";


interface LanguageText {
  text: string;
}

interface Project {
  id: number;
  image: string;
  title: {
    EN: LanguageText;
    RU: LanguageText;
  };
  description: {
    EN: LanguageText;
    RU: LanguageText;
  };
  url: string;
  className: string;
}

type Language = 'EN' | 'RU';


const myWorks: Project[] = [
  {
    id: 1,
    image: erc,
    title: {
      EN: {
        text: "ERC"
      },
      RU: {
        text: "ЕРЦ"
      }
    },
    description: {
      EN: {
        text: "Unified Settlement Center: a leading billing operator in Yekaterinburg for housing and utility services"
      },
      RU: {
        text: "«Единый Расчетный Центр»: биллинговый оператор в сфере начислений за жилищно-коммунальные и иные услуги"
      }
    },
    url:'https://abonent.erc-ekb.ru/',
    className: 'erc',
  },
  {
    id: 2,
    image: poidem,
    title: {
      EN: {
        text: "'Let's Go' Bank"
      },
      RU: {
        text: "Банк 'Пойдём'"
      }
    },
    description: {
      EN: {
        text: "Fintech: Internal application for employees of 'Let's Go Bank!'"
      },
      RU: {
        text: "Финтех: Внутреннее приложение для сотрудников банка 'Пойдём!'"
      }
    },
    url:'https://www.poidem.ru/',
    className: 'poidem',
  },
]

const Portfolio:FC = () => {

  const lang = useContext(LangContexts) as Language;

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
              return <ProjectCard key={proj.id} projectImg={proj.image} title={proj.title[lang].text} description={proj.description[lang].text} url={proj.url} className={proj.className || ""}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
