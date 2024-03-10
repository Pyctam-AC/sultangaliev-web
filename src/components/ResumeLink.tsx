import { FC, useContext } from 'react';
import resumePdf from '../docs/Rustam_Sultangaliev_resume.pdf';
import LangContexts from '../contexts/LangContexts';
import {textsResume} from '../utils/textsPage.ts';

const ResumeLink:FC = () => {

  const lang = useContext(LangContexts);

  return (
    <a href={resumePdf} target="_blank" rel="noreferrer">
      <div className="resume-link">
        <p>{textsResume[lang].text}</p>
      </div>
    </a>
  )
}

export default ResumeLink
