export interface Text {
  text: string;
}

export interface textContent {
  [key: string]: Text;
}

export interface textList {
  [key: string]: {
    [key: string]: string
  };
}
