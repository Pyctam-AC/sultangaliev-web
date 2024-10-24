import { FC, useContext } from 'react';
import Heading from './Heading';

import skillsImg from '../images/code4.png';

import htmlImg from '../images/skills-icons/html.svg';
import cssImg from '../images/skills-icons/css.svg';
import sassImg from '../images/skills-icons/sass.svg';
import jsImg from '../images/skills-icons/javascript.svg';

import reactImg from '../images/skills-icons/react.svg';
import reduxImg from '../images/skills-icons/redux.svg';
import typescriptImg from '../images/skills-icons/typescript.svg';
//import jqueryImg from '../images/skills-icons/jquery.svg';
import angular from '../images/skills-icons/angular-icon-logo.png'

import gitImg from '../images/skills-icons/git.svg';
import jiraImg from '../images/skills-icons/jira.png';
import confluenceImg from '../images/skills-icons/confluence.svg';
import agileImg from '../images/skills-icons/jquery.svg';

import nodejsImg from '../images/skills-icons/nodejs.svg';
import expressImg from '../images/skills-icons/express.png';
import mongodbImg from '../images/skills-icons/mongodb.png';
//import nestjsImg from '../images/skills-icons/nestjs.png';
import appscript from '../images/skills-icons/apps_script_1x_24dp.png'
import LangContexts from '../contexts/LangContexts';
import { headingText, skillsText } from '../utils/textsPage';
import ScrollDownCircle from './ScrollDownCircle';


const Skills:FC = () => {

  const lang = useContext(LangContexts);

  return (
    <section className="section skills-section" id="skills" >
      <div className="skills">
        <div className="skills_info">
          <div className="skills_heading">
            <Heading text={headingText[lang].skills}/>
            <p className="skills_description">{skillsText[lang].par_1}</p>
          </div>
          <div className="skills_cards">
            <div className="skills_card" data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Basics</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={htmlImg} alt="html" />
                  <p className="skills_card_list_item_name">HTML</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={cssImg} alt="css" />
                  <p className="skills_card_list_item_name">CSS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={sassImg} alt="sass" />
                  <p className="skills_card_list_item_name">SASS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={jsImg} alt="javascript" />
                  <p className="skills_card_list_item_name">JavaScript</p>
                </li>
              </ul>
            </div>
            <div className="skills_card" data-aos="flip-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Script</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={reactImg} alt="react" />
                  <p className="skills_card_list_item_name">React JS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={reduxImg} alt="redux" />
                  <p className="skills_card_list_item_name">Redux</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={typescriptImg} alt="typescript" />
                  <p className="skills_card_list_item_name">TypeScript</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={angular} alt="angular" />
                  <p className="skills_card_list_item_name">Angular</p>
                </li>
              </ul>
            </div>
            <div className="skills_card" data-aos="flip-up" data-aos-delay="700" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Workflow</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={gitImg} alt="git" />
                  <p className="skills_card_list_item_name">Git</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={jiraImg} alt="jira" />
                  <p className="skills_card_list_item_name">Jira</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={confluenceImg} alt="confluence" />
                  <p className="skills_card_list_item_name">Confluence</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={agileImg} alt="agile" />
                  <p className="skills_card_list_item_name">Agile</p>
                </li>
              </ul>
            </div>
            <div className="skills_card" data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Backend</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={nodejsImg} alt="node js" />
                  <p className="skills_card_list_item_name">Node JS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={expressImg} alt="express" style={{backgroundColor:'white'}}/>
                  <p className="skills_card_list_item_name">Express</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={mongodbImg} alt="mongo db" />
                  <p className="skills_card_list_item_name">Mongo DB</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={appscript} alt="nest js" />
                  <p className="skills_card_list_item_name">AppsScripts</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills_img">
          <img src={skillsImg} alt="decorative" />
        </div>
      </div>
      <ScrollDownCircle link="#portfolio_footer"/>
    </section>
  )
}

export default Skills;
