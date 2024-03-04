import { FC } from 'react';
import resumePdf from '../docs/Rustam_Sultangaliev_resume.pdf';

const ResumeLink:FC = () => {
  return (
    <a href={resumePdf} target="_blank" rel="noreferrer">
      <div className="resume-link">
        <p>Resume</p>
      </div>
    </a>
  )
}

export default ResumeLink
