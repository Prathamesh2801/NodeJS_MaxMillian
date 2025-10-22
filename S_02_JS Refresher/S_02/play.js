const name = "Prathamesh";
let age = 21;
const hasHobbbies = true;

age = 22;

const summarizeUser = (userName, userAge, useHobby) => {
  return `Name is ${userName} , age is ${userAge} and the user ${
    hasHobbbies ? "have" : "does not have"
  } hobbies`;
};

const add = (a, b) => {
  return a + b;
};
const multiply = (a, b) => a * b;
const square = (a) => a * a;
const addRandom = () => Math.round(Math.random() * 10)

console.log(add(1, 2));
console.log(multiply(1, 2));
console.log(square(3));
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbbies));
