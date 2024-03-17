/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useContext, useEffect, useRef } from 'react';
import LangContexts from '../../../../contexts/LangContexts';

interface IHeadingfProps {
  text: string;
}

const HeadingIntro: FC<IHeadingfProps> = ({ text }) => {

  const lang = useContext(LangContexts);

  // Инициализируем useRef с типом соответствующего DOM элемента
  const firstLine = useRef<HTMLHeadingElement>(null);
  const secondLine = useRef<HTMLHeadingElement>(null);
  const thirdLine = useRef<HTMLHeadingElement>(null);

  //const [first, setFirst] = useState()

  //const heading: any = useRef();
  const characters = text.split("");

  const letterrEffect = (letter:string[] | undefined) =>{
    return letter?.forEach((char: string, i: number) => {
      const letter = document.createElement("span");
      if (char === " ") {
        letter.style.display = "inline";
      } else {
        letter.style.display = "inline-block";
      }
      letter.classList.add("intro_header_letter");

      if (char === "R" || char === "Р") {
        letter.classList.add("intro_header_letter-main");
        letter.dataset.aos = "letter-animation";
        letter.dataset.aosDuration = "800";
      } else {
        letter.classList.add("intro_header_letter-default");
        letter.innerText = char;
        letter.dataset.aos = "zoom-in";
        letter.dataset.aosDuration = "200";
      }

      letter.dataset.aosDelay = `${i * 100}`;

      if (lang === "RU") {
        if (i < 7) {
          //firstLine.current?.removeChild(letter);
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

   letterrEffect(characters);

  }, [lang]);

  return (
  <header>
    <h1 ref={firstLine} className="intro_header intro_header_first-line"></h1>
    <h1 ref={secondLine} className="intro_header intro_header_second-line"></h1>
    <h1 ref={thirdLine} className="intro_header intro_header_third-line"></h1>
  </header>);
};

export default HeadingIntro;
