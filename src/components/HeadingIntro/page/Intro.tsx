import { FC, MouseEventHandler, TouchEventHandler, useCallback, useContext, useEffect, useRef, useState } from "react";
import colorPalettes from "../../../utils/colorPalettes";
import { textCare, textContactMe } from "../../../utils/textsPage";
import LangContexts from "../../../contexts/LangContexts";
import HeadingIntro from "./UI/HeadingIntro";
import ScrollDownCircle from "../../ScrollDownCircle";
import { Language } from "../../../interface/types";


export const Intro: FC = () => {
  const lang = useContext(LangContexts) as Language;
  const introScreen = useRef<HTMLDivElement>(null);
  const squaresBoard = useRef<HTMLDivElement>(null);

  const [activeColorPalette] = useState<string[]>(colorPalettes.neon);
  const [squaresArray, setSquaresArray] = useState<JSX.Element[]>([]);

  const squareMouseOverHandle: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.role === 'square') {
      setColor(target);
    }
  };

  // Обработчик для сенсорных событий, чтобы анимация работала на мобильных устройствах
  const squareTouchHandle: TouchEventHandler<HTMLDivElement> = (e) => {

    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      // Находим элемент, над которым находится палец
      const target = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLDivElement;
      if (target && target.dataset.role === 'square') {
        setColor(target);
      }
    }
  };

  const setColor = useCallback(
    (target: HTMLElement, timer: number = 0): void => {
      const getRandomColor = () => {
        const colorIndex: number = Math.round(Math.random() * (activeColorPalette.length - 1));
        return activeColorPalette[colorIndex];
      };

      setTimeout(() => {
        if (target) {
          target.style.backgroundColor = '#' + getRandomColor();
        }
      }, timer);

      setTimeout(() => {
        if (target) {
          target.style.backgroundColor = '#1d1d1d';
        }
      }, timer + 700);
    },
    [activeColorPalette]
  );

  const getRandomElement = (elementsArray: NodeListOf<Element>) => {
    return elementsArray[Math.round(Math.random() * (elementsArray.length - 1))] as HTMLElement;
  };


  useEffect(() => {
    const introDiv = introScreen.current;
    if (introDiv) {
      const { width, height } = introDiv.getBoundingClientRect();
      // Размер квадрата 20x20px
      const squaresAmount = Math.floor(width * height / 400);

      const newSquaresArray = Array.from({ length: squaresAmount }, (_, i) => (
        <div key={i} className="square" data-role="square"></div>
      ));
      setSquaresArray(newSquaresArray)
    }
  }, []);
  useEffect(() => {
    if (squaresArray.length > 0) {
      const squares = document.querySelectorAll('[data-role=square]');
      const intervalId = setInterval(() => {
        for (let i = 1; i < 8; i++) {
          setColor(getRandomElement(squares), i * 100 + 200);
        }
      }, 600);

      return () => clearInterval(intervalId);
    }

  }, [squaresArray, setColor]);

  return (
    <section id="home" className="section intro-section">
      <div ref={introScreen} className="intro">
        <HeadingIntro />
        <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="2900" className="text-muted intro_text">{textCare[lang].text}</p>
        <div className="intro_contact" data-aos="fade-down" data-aos-duration="800" data-aos-delay="3000">
          <a href="#portfolio_footer"><button className="animated-button intro_contact-button">{textContactMe[lang].text}</button></a>
        </div>
        <div
          ref={squaresBoard}
          onMouseOver={squareMouseOverHandle}
          onTouchStart={squareTouchHandle}
          onTouchMove={squareTouchHandle}
          className="intro_board"
          id="board"
        >
          {squaresArray}
        </div>
        <ScrollDownCircle link="#about"/>
      </div>
    </section>
  );
};
