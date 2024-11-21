import { FC, useContext } from 'react';
import CV from '../docs/Rustam_Sultangaliev_CV.pdf';
import resume from '../docs/Рустам_Султангалиев_резюме.pdf'
import LangContexts from '../contexts/LangContexts';
import {textsResume} from '../utils/textsPage.ts';

type Language = 'EN' | 'RU';

const ResumeLink:FC = () => {

  const lang = useContext(LangContexts) as Language;

  const linkRezume = {
    EN: {
      link: CV
    },
    RU: {
      link: resume
    }
  }

  return (
    <a href={linkRezume[lang].link} target="_blank" rel="noreferrer">
      <div className="resume-link">
        <p>{textsResume[lang].text}</p>
      </div>
    </a>
  )
}

export default ResumeLink
