/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, MouseEventHandler, useCallback, useContext, useEffect, useRef, useState } from "react";

import scrollDownImg from '../../../images/scroll-down.png';
import colorPalettes from "../../../utils/colorPalettes";

import { textIntro, textCare, textContactMe } from "../../../utils/textsPage";
import LangContexts from "../../../contexts/LangContexts";
import HeadingIntro from "./UI/HeadingIntro";

export const Intro: FC = () => {

  const lang = useContext(LangContexts);

  // Используем useRef для получения ссылок на DOM элементы
  const introScreen: any = useRef();
  const squaresBoard: any = useRef();

  // Инициализируем useRef с типом соответствующего DOM элемента
  /* const firstLine = useRef<HTMLHeadingElement>(null);
  const secondLine = useRef<HTMLHeadingElement>(null);
  const thirdLine = useRef<HTMLHeadingElement>(null); */

  // Состояние активной палитры цветов и массив квадратов
  const [activeColorPalette] = useState<string[]>(colorPalettes.neon);
  const [squaresArray, setSquaresArray] = useState<JSX.Element[]>([]);

  // Обработчик события наведения мыши на квадрат
  const squareMouseOverHandle: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.role === 'square') {
      setColor(target);
    }
  }

  // Функция установки цвета квадрата
  const setColor = useCallback(
    (target: HTMLElement, timer: number = 0) : void => {
      const getRandomColor = () => {
        const colorIndex: number = Math.round(Math.random() * activeColorPalette.length);
        return activeColorPalette[colorIndex];
      }

      setTimeout(() => {
        if (target)
        {target.style.backgroundColor = '#' + getRandomColor()}
      }, timer);

      setTimeout(() => {
        if (target)
        {target.style.backgroundColor = '#1d1d1d'}
      }, timer + 700);
    },
    [activeColorPalette]
  )

  const getRandomElement = (elementsArray: NodeListOf<Element>) => {
    return elementsArray[Math.round(Math.random() * (elementsArray.length-1))] as HTMLElement;
  }

  const characters = textIntro[lang].text
  //const characters = textIntro[lang].text.split("");

/*   const letterrEffect = () => {

    characters.forEach((char, i) => {
      const letter = document.createElement('span');
      if (char === ' ') {
        letter.style.display = 'inline';
      } else {
        letter.style.display = 'inline-block';
      }
      letter.classList.add('intro_header_letter');

      if (char === 'R' || char === 'Р') {
        letter.classList.add('intro_header_letter-main');
        letter.dataset.aos="letter-animation";
        letter.dataset.aosDuration="800";
      } else {
        letter.classList.add('intro_header_letter-default');
        letter.innerText = char;
        letter.dataset.aos="zoom-in";
        letter.dataset.aosDuration="200";
      }

      letter.dataset.aosDelay=`${i * 100}`;

      if (lang === 'RU') {
        if (i < 7) {
          firstLine.current?.append(letter);
        } else if (i < 17) {
          secondLine.current?.append(letter);
        } else if (i < 33) {
          thirdLine.current?.append(letter);
        }
      } else {
        if (i < 3) {
        firstLine.current?.append(letter);
        } else if (i < 15) {
        secondLine.current?.append(letter);
        } else if (i < 28) {
          thirdLine.current?.append(letter);
        }
      }
    });
  }


  // useEffect для инициализации заголовков при монтировании компонента
  useEffect(() => {
    letterrEffect()
    }, [lang]
  ); */



  // useEffect для инициализации массива квадратов при монтировании компонента
  useEffect(() => {

    const introDivRect = introScreen.current?.getBoundingClientRect();

    if (introDivRect) {
      const squaresAmount = Math.floor((introDivRect.width ?? 0) * (introDivRect.height ?? 0) / (20*20));
      const newSquaresArray: Array<JSX.Element> = [];
      for (let i = 0; i < squaresAmount; i++) {
        newSquaresArray.push(<div key={i} className="square" data-role="square"></div>);
      }
      setSquaresArray(newSquaresArray);

      const squares = document.querySelectorAll('[data-role=square]');
      const intervalId = setInterval(() => {
        for (let i = 1; i < 8; i++) {
          setColor(getRandomElement(squares), i * 100 + 200);
        }
      }, 600);

      return () => clearInterval(intervalId);
    }
  }, [lang]);

  return (
    <section id="home" className="section intro-section">
      <div ref={introScreen} className="intro">
        {/* <h1 ref={firstLine} className="intro_header intro_header_first-line"></h1>
        <h1 ref={secondLine} className="intro_header intro_header_second-line"></h1>
        <h1 ref={thirdLine} className="intro_header intro_header_third-line"></h1> */}
        <HeadingIntro text={characters} />
        <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="2900" className="text-muted intro_text">{textCare[lang].text}</p>
        <div className="intro_contact" data-aos="fade-down" data-aos-duration="800" data-aos-delay="3000">
          <a href="#portfolio"><button className="animated-button intro_contact-button">{textContactMe[lang].text}</button></a>
        </div>
        <div ref={squaresBoard} onMouseOver={squareMouseOverHandle} className="intro_board" id="board">
          {squaresArray}
        </div>
        <a href="#about" className="intro_scroll-down">
          <img src={scrollDownImg} className="" alt="scroll down" />
          <span></span>
        </a>
      </div>
    </section>
  )
}
