// function declaration
function getName1(name) {
  return `Имя равно ${name}`;
}

// function expression
const getName2 = function (name) {
  return `Имя равно ${name}`;
};

// arrow function expression
const getName3 = name => {
  return `Имя равно ${name}`;
};

console.log('function declaration getName1: ', getName1('Alex'));
console.log('function expression getName2: ', getName2('Nick'));
console.log('arrow function expression getName3: ', getName3('Greg'));