/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import LangContexts from '../../../../contexts/LangContexts';
import { textIntro } from '../data';

const HeadingIntro: FC = () => {
  const lang = useContext(LangContexts);


  const [change, setChange] = useState(false);

  const [firstLine, secondLine, thirdLine] = useMemo(() => {
    if (change) return [null, null, null];
    return [
      textIntro[lang].first_Line.split(''),
      textIntro[lang].second_Line.split(''),
      textIntro[lang].third_Line.split('')
    ];
  }, [lang, change]);

  useEffect(() => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
    }, 100);
  }, [lang]);

  const classLetter = (char: string) => (char === ' ' ? 'space' : 'letter');
  const letterImg = (char: string) =>
    char === 'R' || char === 'Р' ? 'intro_header_letter-main' : 'intro_header_letter-default';

  const renderLine = (line: string[] | null, delayMultiplier: number, lineClass: string) => (
    <div className='intro_header_line'>

      {line?.map((letter, i) => (
        <h1
          key={i}
          className={`intro_header_letter ${lineClass} ${letterImg(letter)} ${classLetter(letter)}`}
          data-aos='zoom-in'
          data-aos-duration='200'
          data-aos-delay={`${i * delayMultiplier}`}
        >
          {letter === "R" || letter === "Р" ? " " : letter}
        </h1>
      ))}
    </div>
  );

  return (
    <header className='intro_header'>
      {renderLine(firstLine, 200, 'intro_header_first-line')}
      {renderLine(secondLine, 150, 'intro_header_second-line')}
      {renderLine(thirdLine, 100, 'intro_header_second-line')}
    </header>
  );
};

export default HeadingIntro;
