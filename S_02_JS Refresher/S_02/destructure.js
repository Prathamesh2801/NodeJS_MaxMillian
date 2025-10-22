const person = {
  name: "Prathamesh",
  age: 21,
  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};

const printName = ({ name,age }) => {
  console.log(name+ ":"+age);
};

printName(person);

const {name,age} = person
console.log(name,age)


const hobbies = ["Reading","Music"]
const [hobby1,hobby2] = hobbies
console.log(hobby1,hobby2)