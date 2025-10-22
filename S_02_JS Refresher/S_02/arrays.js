const hobbies = ["Sports", "Cooking", "Music"];

// let srno = 1;
// for (let hobby of hobbies) {
//   console.log(`${srno}. My hobby is ${hobby}`);
//   srno += 1;
// }
// console.log(hobbies.map(hobby => `Hobby: ${hobby}`))
// console.log(hobbies)

// Array is Reference type we are not editiong the constant value just changing its pointing value
// In Order to Learn in Detail understand Reference vs Primitive values
// hobbies.push("Programming");
// const copiedHobbies = hobbies.slice()
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

// const toArray = (arg1,arg2,arg3) => {
//     return [arg1,arg2,arg3]
// }
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
