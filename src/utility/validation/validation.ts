const checkMobileNumer = (value: string) => {
  const condition = new RegExp(/^[6-9][0-9]{9}$/);
  return condition.test(value);
};

const checkEmail = (value: string) => {
  const condition = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(?:\.[a-zA-Z]{2,3})?$/,
  );
  return condition.test(value);
};

const checkNumeric = (value: string) => {
  const condition = new RegExp(/^[0-9]+$/);
  return condition.test(value);
};

const checkString = (value: string) => {
  const condition = new RegExp(/^[a-zA-Z ]+$/);
  return condition.test(value);
};

const checkFirstNameString = (value: string) => {
  const condition = new RegExp(/^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}|[a-zA-Z]{2,})$/);
  return condition.test(value);
};

const checkFirstNameSpaceString = (value: string) => {
  const condition = new RegExp(/^[A-Za-z]+(?: [A-Za-z]+)*$/);
  return condition.test(value);
};

const checkFirstNameCharacter = (value: string) => {
  const condition = new RegExp(/^(?:(?!\s{2,}).)+$/);
  return condition.test(value);
};

const checkLastNameString = (value: string) => {
  const condition = new RegExp(/^[a-zA-Z ]{2,}$/);
  return condition.test(value);
};

const checkStringSpace = (value: string) => {
  const condition = new RegExp(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/);
  return condition.test(value);
};

const checkBlankSpace = (value: string) => {
  const condition = new RegExp(/^[^\s]+(\s[^\s]+)*$/);
  return condition.test(value);
};

const checkSpaceInBetween = (value: string) => {
  const condition = new RegExp(/^[^\s]+(\s[^\s]+)*\s*$/);
  return condition.test(value);
};

const checkInformation = (value: string) => {
  const condition = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9])[\p{L}\p{M}\p{N}\p{P}\p{S} !@#$%^&*()_+\-=,.<>?;:'"\[\]{}|\\/~`]+$/u,
  );
  return condition.test(value);
};

const getYoutubeShorts = (value: string) => {
  let matchRegExp = value.match(
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/,
  );
  return matchRegExp ? matchRegExp[1] : '';
};

const numberToWords = (num: number): string => {
  const belowTwenty = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];

  const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  const aboveThousand = ['Thousand', 'Million', 'Billion'];

  // Helper function to convert whole number part
  const integerToWords = (n: number): string => {
    if (n === 0) return '';

    if (n < 20) return belowTwenty[n];

    if (n < 100)
      return `${tens[Math.floor(n / 10)]} ${
        n % 10 !== 0 ? belowTwenty[n % 10] : ''
      }`.trim();

    if (n < 1000)
      return `${belowTwenty[Math.floor(n / 100)]} Hundred ${integerToWords(
        n % 100,
      )}`.trim();

    for (let i = 0, value = 1000; value <= 1e12; value *= 1000, i++) {
      if (n < value * 1000) {
        return `${integerToWords(Math.floor(n / value))} ${
          aboveThousand[i]
        } ${integerToWords(n % value)}`.trim();
      }
    }

    return '';
  };

  // Handle zero
  if (num === 0) return 'Zero';

  // Separate integer and decimal parts
  const [integerPart, decimalPart] = num.toString().split('.');

  // If only decimal part exists
  if (!parseInt(integerPart)) {
    // Pad decimal part to ensure two digits
    const paddedDecimalPart = decimalPart.padEnd(2, '0').slice(0, 2);
    const decimalWords = integerToWords(parseInt(paddedDecimalPart));
    return `${decimalWords} Paisa`;
  }

  // Convert integer part
  const integerWords = integerToWords(parseInt(integerPart));

  // If no decimal part, return integer words with "Rupees"
  if (!decimalPart) return `${integerWords} Rupees`;

  // Pad decimal part to ensure two digits
  const paddedDecimalPart = decimalPart.padEnd(2, '0').slice(0, 2);
  const decimalWords = integerToWords(parseInt(paddedDecimalPart));

  // Combine integer and decimal parts
  return `${integerWords} Rupees and ${decimalWords} Paisa`;
};
export {
  checkMobileNumer,
  checkEmail,
  checkNumeric,
  checkString,
  checkBlankSpace,
  checkFirstNameString,
  checkLastNameString,
  checkStringSpace,
  getYoutubeShorts,
  checkInformation,
  checkFirstNameSpaceString,
  checkFirstNameCharacter,
  checkSpaceInBetween,
  numberToWords,
};
