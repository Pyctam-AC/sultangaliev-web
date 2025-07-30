import { FC, useContext } from 'react';
import CV from '../docs/Rustam_Sultangaliev_CV.pdf';
import resume from '../docs/Рустам_Султангалиев_резюме.pdf'
import LangContexts from '../contexts/LangContexts';
import { textsResume } from '../utils/textsPage.ts';
import { Language } from '../interface/types.ts';


const resumeLinks: Record<Language, string> = {
  EN: CV,
  RU: resume,
};

const ResumeLink:FC = () => {

  const lang = useContext(LangContexts) as Language;

  return (
    <a href={resumeLinks[lang]} target="_blank" rel="noreferrer">
      <div className="resume-link">
        <p>{textsResume[lang].text}</p>
      </div>
    </a>
  )
}

export default ResumeLink
