import { FC, useContext } from 'react';
import LangContexts from '../contexts/LangContexts';

interface ScrollDownCircleProps {
  link: string;
}
type Language = 'EN' | 'RU';

const ScrollDownCircle: FC<ScrollDownCircleProps> = ({ link }) => {
  const lang = useContext(LangContexts) as Language;

  const scrollText = {
    EN: {
      text: "SCROLL DOWN - SCROLL DOWN - "
    },
    RU: {
      text: "ДАЛЬШЕ ВНИЗ - ДАЛЬШЕ ВНИЗ - "
    }
  }
  const radius = 60; // радиус в пикселях для круга
  const diameter = radius * 2; // Устанавливаем диаметр
  const circumference = diameter * Math.PI; // Длина окружности

  return (
    <a href={link} className="circle-container">
      <svg className="circle" viewBox={`0 0 ${diameter} ${diameter}`}>

        <path
          id="circle"
          d={`M ${radius},0 A ${radius},${radius} 0 1,1 ${radius},${diameter} A ${radius},${radius} 0 1,1 ${radius},0`}
        />
        <text className="scroll-text">
          <textPath
            xlinkHref="#circle"
            lengthAdjust="spacing" // Обеспечивает равномерное распределение текста
            textLength={circumference} // Длина текста равна окружности
            startOffset="0%" // Начинаем с отступом от начала круга
            textAnchor="start" // Центрирование текста
          >
            {scrollText[lang].text}&nbsp;&nbsp;
          </textPath>

        </text>
      </svg>
      <div className="arrow"></div>
    </a>
  );
};

export default ScrollDownCircle;
