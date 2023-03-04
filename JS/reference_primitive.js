// const number = 1;
// const num2 = number;

// console.log(num2);

const person = {
  name: 'Haruka'
};

const secondPerson = {
  ...person
};
person.name = 'Max';
console.log(secondPerson);