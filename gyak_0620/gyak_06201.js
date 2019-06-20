let readline = require('readline-sync');
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const operation = (a, b, t) => {
  return t(a, b);
};

let a = Number(readline.question('Az első szám: '));

let b = Number(readline.question('A második szám: '));
let t = readline.question('A művelet: ');

if (a === 'q' || b === 'q' || t === 'q') {
  console.log('Viszlát!');
  process.exit();
}
if (isNaN(a) === true) {
  console.log('Ez nem szám!');
  a = readline.question('Próbáljuk meg még egyszer az első számot: ');
}
if (isNaN(b) === true) {
  console.log('Ez nem szám!');
  b = readline.question('Próbáljuk meg még egyszer a második számot: ');
}
if (t !== '+' || t !== '-' || t !== '*' || t !== '/') {
  console.log('Ez nem művelet!');
  t = readline.question('Próbáljuk meg még egyszer a műveletet: ');
}

if (t === '+') {
  console.log(operation(a, b, add));
} else if (t === '-') {
  console.log(operation(a, b, sub));
} else if (t === '*') {
  console.log(operation(a, b, mult));
} else if (t === '/') {
  console.log(operation(a, b, div));
} else {
  console.log('Ez nem művelet!');
  t = readline.question('Próbáljuk meg még egyszer a műveletet: ');
}
