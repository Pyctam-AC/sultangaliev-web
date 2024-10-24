/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState} from "react";
import colorPalettes from "../utils/colorPalettes";
import "./squaresAnimation.scss";

export const useSquaresAnimation = (lang: string) => {
  const introScreen = useRef<HTMLDivElement>(null);
  const squaresBoard = useRef<HTMLDivElement>(null);
  const [squaresArray, setSquaresArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!introScreen.current || !squaresBoard.current) return;

    const activeColorPalette = colorPalettes.neon;

    const setColor = (target: HTMLElement, timer: number = 0): void => {
      const getRandomColor = () => {
        const colorIndex = Math.floor(Math.random() * activeColorPalette.length);
        return activeColorPalette[colorIndex];
      };

      setTimeout(() => {
        if (target) {
          target.style.backgroundColor = getRandomColor();
        }
      }, timer);

      setTimeout(() => {
        if (target) {
          target.style.backgroundColor = "#1d1d1d";
        }
      }, timer + 700);
    };

    const getRandomElement = (elementsArray: NodeListOf<Element>) => {
      return elementsArray[Math.floor(Math.random() * elementsArray.length)] as HTMLElement;
    };

    const squareMouseOverHandle = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (target.dataset.role === "square") {
        setColor(target);
      }
    };

    // Генерация квадратов на основе размеров introScreen
    const introDivRect = introScreen.current.getBoundingClientRect();
    const squaresAmount = Math.floor(
      ((introDivRect.width ?? 0) * (introDivRect.height ?? 0)) / (20 * 20)
    );
    const newSquaresArray = Array.from({ length: squaresAmount }, (_, i) => i);
    setSquaresArray(newSquaresArray);

    const intervalId = setInterval(() => {
      const squares = squaresBoard.current?.querySelectorAll("[data-role=square]");
      if (squares) {
        for (let i = 1; i < 8; i++) {
          setColor(getRandomElement(squares), i * 100 + 200);
        }
      }
    }, 600);

    const board = squaresBoard.current;
    if (board) {
      board.addEventListener("mouseover", squareMouseOverHandle);
    }

    return () => {
      clearInterval(intervalId);
      if (board) {
        board.removeEventListener("mouseover", squareMouseOverHandle);
      }
    };
  }, [lang]);

  return {
    introScreen,
    squaresBoard,
    squaresArray,
  };
};
