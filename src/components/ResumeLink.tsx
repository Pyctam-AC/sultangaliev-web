import { FC } from 'react';
import resumePdf from '../docs/ArseniyPomazkov_Resume.pdf';

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
