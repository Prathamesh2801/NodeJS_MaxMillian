// var name = "Pratham";
// console.log(name);

// var secondName = name;
// name = "Cypher";
// console.log(secondName);
// Here it will be Pratham instead of Cypher as it will be obvious

// var person = {
//   age: 21,
//   name: "Pratham",
//   hobbies: ["Sports", "Reading"],
// };

// console.log(person)

// var secondPerson = person
// console.log(secondPerson)

// person.name = "Cypher"
// console.log(secondPerson)  // Here it will be Cypher as the pointer is pointing to same memory address and hence if the data is change even if we try to duplicate the data the variable is only storing data of where the pointing value is

// But what if i actually want to save the value then :
var person = {
  age: 21,
  name: "Pratham",
  hobbies: ["Sports", "Reading"],
};

console.log(person);
// here the Object.assign will help you to merge 2 values
// Now here instead of just storing pointer value we have copied the entire memory address to new address so even if i change in first address there is no influence to other memory and hence properly stored it
var secondPerson = Object.assign({}, person); // Here it is not deep clone
// Modern Syntax :
// var secondPerson = { ...person };  // Here it is not deep clone
console.log(secondPerson);
// If you really want to make a deep deep clone of all properties : https://lodash.com/docs/#cloneDeep visit these package
var myHobbies = person.hobbies.slice() // here slice() without any values will straigth up store the original data 

person.name = "Cypher";
person.hobbies.push("Running");
console.log(secondPerson);

console.log(myHobbies)