// const person = {
//   name: "Prathamesh",
//   age: 21,
//   greet: function() {
//     console.log(`Hi I am ${this.name}`);
//   },
// };
const person = {
  name: "Prathamesh",
  age: 21,
  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};


person.greet();
