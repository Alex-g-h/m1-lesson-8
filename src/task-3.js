function getDivisorsCount(number) {
  // input value check
  let isNumber = true;
  number ?? (isNumber &&= false);
  number = Number(number);
  isNumber &&= !Number.isNaN(number);

  if (!isNumber)
    return NaN;

  if (number <= 0 || !Number.isInteger(number)) {
    alert(`${number} должен быть целым числом и больше нуля!`);
    return NaN;
  }

  // counting
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0)
      counter++;
  }

  return counter;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));