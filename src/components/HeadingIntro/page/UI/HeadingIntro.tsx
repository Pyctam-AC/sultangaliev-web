/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useContext, useEffect, useState } from 'react';
import LangContexts from '../../../../contexts/LangContexts';
import { textIntro } from '../data';

const HeadingIntro: FC = () => {

  const lang = useContext(LangContexts);

  const [change, setChange] = useState(false);

  const firstLine = change ? null : textIntro[lang].first_Line.split('');
  const secondLine = change ? null : textIntro[lang].second_Line.split('');
  const thirdLine = change ? null : textIntro[lang].third_Line.split('');

  useEffect (() => {
    setChange(true);
    setTimeout(()=> {
      setChange(false)
    }, 100)
  }, [lang])

  const classLetter = (char: string) => char === ' ' ? "space" : "letter";
  const letterImg = (char: string) => {
    if (char === "R" || char === "Р") {
      return 'intro_header_letter-main'
    }
    else {
      return "intro_header_letter-default"
    }
  }

  return (
  <header className='intro_header'>
    <div className='intro_header_line'>
    {
      firstLine?.map((letter, i) => {
        return (
          <h1
            className={`intro_header_letter intro_header_first-line intro_header_letter-default ${classLetter(letter)}`}
            data-aos="zoom-in"
            data-aos-duration="200"
            data-aos-delay={`${i * 200}`}
          >
            {letter}
          </h1>
        );
      })
    }
    </div>
    <div className='intro_header_line'>
    {
      secondLine?.map((letter, i) => {

          return (
            <h1
              className={`intro_header_letter intro_header_second-line ${letterImg(letter)} ${classLetter(letter)}`}
              data-aos="zoom-in"
              data-aos-duration="200"
              data-aos-delay={`${i * 150}`}
            >
              {letter === "R" || letter === "Р" ? " " : letter}
            </h1>
          )
      })
    }
    </div>
    <div className='intro_header_line'>
    {
      thirdLine?.map((letter, i) => {
        return (
          <h1
            className={`intro_header_letter intro_header_second-line intro_header_letter-default ${classLetter(letter)}`}
            data-aos="zoom-in"
            data-aos-duration="200"
            data-aos-delay={`${i * 100}`}
          >
            {letter}
          </h1>
        );
      })
    }
    </div>
  </header>);
};

export default HeadingIntro;
