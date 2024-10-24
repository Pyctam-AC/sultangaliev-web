/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, MouseEventHandler, useCallback, useContext, useEffect, useRef, useState } from "react";
import colorPalettes from "../../../utils/colorPalettes";
import { textCare, textContactMe } from "../../../utils/textsPage";
import LangContexts from "../../../contexts/LangContexts";
import HeadingIntro from "./UI/HeadingIntro";
import ScrollDownCircle from "../../ScrollDownCircle";

export const Intro: FC = () => {
  const lang = useContext(LangContexts);
  const introScreen: any = useRef();
  const squaresBoard: any = useRef();

  const [activeColorPalette] = useState<string[]>(colorPalettes.neon);
  const [squaresArray, setSquaresArray] = useState<JSX.Element[]>([]);

  const squareMouseOverHandle: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.role === 'square') {
      setColor(target);
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

  // useEffect для инициализации массива квадратов при монтировании компонента
  useEffect(() => {
    const introDivRect = introScreen.current?.getBoundingClientRect();

    if (introDivRect) {
      const squaresAmount = Math.floor((introDivRect.width ?? 0) * (introDivRect.height ?? 0) / (20 * 20));
      const newSquaresArray: Array<JSX.Element> = [];
      for (let i = 0; i < squaresAmount; i++) {
        newSquaresArray.push(<div key={i} className="square" data-role="square"></div>);
      }
      setSquaresArray(newSquaresArray);
    }
  }, [lang]);

  // useEffect для инициализации мерцания после загрузки squaresArray
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
          <a href="#portfolio"><button className="animated-button intro_contact-button">{textContactMe[lang].text}</button></a>
        </div>
        <div ref={squaresBoard} onMouseOver={squareMouseOverHandle} className="intro_board" id="board">
          {squaresArray}
        </div>
        <ScrollDownCircle link="#about"/>
      </div>
    </section>
  );
};

        {/* <a href="#about" className="intro_scroll-down">
          <img src={scrollDownImg} className="" alt="scroll down" />
          <span></span>
        </a> */}
