import { FC, TouchEventHandler, useContext, useMemo } from 'react';
import LangContexts from '../../../../contexts/LangContexts';
import { textIntro } from '../data';
import { Language } from '../../../../interface/types';


const HeadingIntro: FC = () => {

  const lang = useContext(LangContexts) as Language;

  const [firstLine, secondLine, thirdLine] = useMemo(() => {
    return [
      textIntro[lang].first_Line.split(''),
      textIntro[lang].second_Line.split(''),
      textIntro[lang].third_Line.split('')
    ];
    // Этот useMemo теперь зависит только от языка
  }, [lang]);

  const classLetter = (char: string) => (char === ' ' ? 'space' : 'letter');
  const letterImg = (char: string) =>
    char === 'R' || char === 'Р' ? 'intro_header_letter-main' : 'intro_header_letter-default';

  // Общая задержка для последовательного появления каждой буквы
  const letterAnimationDelay = 50;

  // Обработчик для сенсорных событий, чтобы анимация вращения буквы 'R' работала на мобильных устройствах
  const handleTouch: TouchEventHandler<HTMLHeadingElement> = (e) => {
    const target = e.currentTarget;

    target.classList.add('touched');

    setTimeout(() => {
      target.classList.remove('touched');
    }, 1000);
  };

  const renderLine = (line: string[] | null, baseIndex: number, lineClass: string) => (
    <div className='intro_header_line'>
      {line?.map((letter, i) => {
        const isSpecialLetter = letter === "R" || letter === "Р";
        return (
          <h1
            key={i}
            className={`intro_header_letter ${lineClass} ${letterImg(letter)} ${classLetter(letter)}`}
            data-aos='zoom-in'
            data-aos-duration='200'
            data-aos-delay={`${(baseIndex + i) * letterAnimationDelay}`}
            onTouchStart={isSpecialLetter ? handleTouch : undefined}
          >
            {isSpecialLetter ? " " : letter}
          </h1>
        );
      })}
    </div>
  );

  const firstLineLength = firstLine?.length || 0;
  const secondLineLength = secondLine?.length || 0;

  return (

    <header key={lang} className='intro_header'>
      {renderLine(firstLine, 0, 'intro_header_first-line')}
      {renderLine(secondLine, firstLineLength, 'intro_header_second-line')}
      {renderLine(thirdLine, firstLineLength + secondLineLength, 'intro_header_second-line')}
    </header>
  );
};

export default HeadingIntro;
