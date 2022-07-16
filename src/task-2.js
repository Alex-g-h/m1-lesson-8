function getSumOfNumbers(number, type = 'odd') {
  // input values check
  let isNumber = true;
  number ?? (isNumber &&= false);
  number = Number(number);
  isNumber &&= !Number.isNaN(number);

  if (!isNumber)
    return NaN;

  if (type !== 'odd' && type !== 'even' && type !== '') {
    console.debug('Type parameter has wrong value. It has to be one of the values: \'odd\', \'even\' or empty string.');
    return NaN;
  }

  // initialization
  let sumOdd = 0;
  let sumEven = 0;

  // counting
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0)
      sumEven += i;
    else
      sumOdd += i;
  }

  // return output value depending on type
  switch (type) {
    case 'odd':
      return sumOdd;
    case 'even':
      return sumEven;
    case '':
      return sumOdd + sumEven;
    default:
      return NaN;
  };
};

const numberTo = 10;
const outputString = `Sum from 0 to ${numberTo} included is equal to`;
console.log(outputString, getSumOfNumbers(numberTo, 'odd'), '(odd only)');
console.log(outputString, getSumOfNumbers(numberTo, 'even'), '(even only)');
console.log(outputString, getSumOfNumbers(numberTo, ''));