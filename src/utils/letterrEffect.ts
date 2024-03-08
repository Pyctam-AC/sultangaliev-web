const letterrEffect = (characters: string, /* firstLine: HTMLHeadingElement, secondLine: HTMLHeadingElement, thirdLine: HTMLHeadingElement */) => {

  characters.split('').forEach((char, i) => {
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

    /* if (i < 3) {
      firstLine.current?.append(letter);
    } else if (i < 15) {
      secondLine.current?.append(letter);
    } else if (i < 28) {
      thirdLine.current?.append(letter);
    } */
  });
}

export default letterrEffect;
