// Интерфейс для определения типа colorPalettes
interface ColorPalettes {
  [key: string]: string[];
}

const colorPalettes: ColorPalettes = {
  default: ['FFFF00', 'DAA520', '9370DB', 'FFA07A', 'FFD700', '00BFFF', '00CED1', 'FF69B4', '7FFF00', 'FFD700'],
  neon: ['FFFF00', 'DAA520', 'FF69B4', 'FF6347', 'FFD700', 'FF8C00', '00FFFF', '00CED1', '00BFFF', '7FFF00'],
  pinky: ['FFFF00', 'DAA520', 'FF69B4', 'FF6347', 'FFD700', 'FF8C00', 'FF1493', 'FF00FF'],
  blue: ['FFFF00', 'DAA520', '9370DB', 'FFA07A', '4169E1', '87CEEB', '00BFFF', 'ADD8E6'],
  rainbow: ['FFFF00', 'DAA520', 'FF69B4', 'FF6347', '800080', 'FFD700']
}

export default colorPalettes;
