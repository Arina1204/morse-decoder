const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const first = [];

  for (let i = 0; i < expr.length; i += 10) {
    first.push(expr.substring(i, i + 10));
  }

  let result = '';

  for (let i = 0; i < first.length; i += 1) {
    const block = first[i];

    if (block === '**********') {
      result += ' ';
    } else {
      let letter = '';
      for (let j = 0; j < block.length; j += 2) {
        const pair = block.substring(j, j + 2);

        if (pair === '10') {
          letter += '.';
        }
        if (pair === '11') {
          letter += '-';
        }
        if (pair === '00') {
          letter += '';
        }
      }
      result += MORSE_TABLE[letter];
    }
  }
  return result;
};
