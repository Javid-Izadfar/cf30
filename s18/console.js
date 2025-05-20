console.log("hi");

const num = 135;
console.log(typeof num);

const bol = false;
console.log(typeof bol);

const str = "jay";
console.log(typeof str);

const arr = ["jay", "ali", "masoumeh", "shakiba"];
console.log(typeof arr);
console.log(arr);
console.log(arr[3]);

const arr2 = ["str", 124, false, 24, true, "Reza"];

const obj = {
  name: "Javid",
  age: 31,
  nicknames: ["Jay", "Jayweed"],
  hello: (_name) => {
    return "Hi " + _name;
  },
};
const obj2 = {
  name: "Reza",
  age: 32,
  nicknames: [],
  hello: (_name) => {
    return "Hi " + _name;
  },
};
console.log(typeof obj);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.hello("Ali"));

const myName = "Javid";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(obj.name.toUpperCase());

const people = [
  { name: "Alice", age: 25, job: "Engineer" },
  { name: "Bob", age: 32, job: "Designer" },
  { name: "Charlie", age: 29, job: "Teacher" },
  { name: "Diana", age: 24, job: "Developer" },
  { name: "Ethan", age: 35, job: "Manager" },
  { name: "Fiona", age: 28, job: "Engineer" },
  { name: "George", age: 41, job: "CEO" },
  { name: "Hannah", age: 30, job: "Marketing" },
  { name: "Ian", age: 27, job: "Developer" },
  { name: "Jasmine", age: 33, job: "HR" },
];

console.log(people[0].name);
console.log(people[9].job);
console.log(people.length);
console.log(people[people.length - 1].age);

// arrayName.someMethod(function)

const sayName = (person) => {
  console.log(person.name);
};

// for (let index = 0; index < people.length; index++) {
//     sayName(people[index])
// }

people.forEach(sayName);
people.forEach((person) => {
  console.log(person.name);
});

const engineers = [];
// engineers.push('Jay')
console.log(engineers);
people.forEach((person) => {
  if (person.job === "Engineer") {
    engineers.push(person);
  }
});
console.log(engineers);

const developers = people.filter((person) => {
  return person.job === "Developer";
});
console.log(developers);

const names = people.map((person) => {
  return person.name;
});
console.log(names);

const p2 = people.map((person) => {
  const is_old = person.age > 30;
  return {
    name: person.name,
    is_old: is_old,
  };
});
console.log(p2);

const p3 = people.map((person) => {
  return {
    name: person.name,
    age: person.age,
    job: person.job,
    is_old: person.age > 30,
  };
});
console.log(p3);

const numbers = [
  7, 14, 3, 14, 0, 19, 6, 20, 2, 8, 14, 3, 5, 11, 7, 18, 9, 6, 13, 1,
];

let sum = 0;
numbers.forEach((num) => {
  sum = sum + num;
});

const colors = ["Red", "Green", "Blue"];
// console.log(colors)
// colors.push('Yellow')
// console.log(colors)
// colors.pop()
// console.log(colors)
// colors.unshift('Pink')
// console.log(colors)
// colors.splice(2, 2)
// console.log(colors)

console.log(colors);

const new_colors = colors;
const new_colors2 = [...colors];
// {...obj}

console.log(new_colors);
console.log(new_colors2);

new_colors.push("Yellow");

console.log(colors);
console.log(new_colors);
console.log(new_colors2);

const person = {
  name: "Jay",
  age: 31,
};
person.name = "Parsa";

console.log(person.name);
person.job = "Programming";
console.log(person);

// person = {name: 'Reza'}
// console.log(person);

const ali = { ...person };
console.log(person);
console.log(ali);
person.name = "javid";
console.log(person);
console.log(ali);

const ian = people.find((person) => {
  return person.name === "Ian";
});
console.log(!!ian);

const hasIan = people.some((person) => {
  return person.name === "Ian";
});
console.log(hasIan);

const Ians = people.filter((person) => {
  return person.name === "Ian";
});
console.log(!!Ians.length);

const allAreDevelopers = people.every((person) => {
  return person.job === "Developer";
});
console.log(allAreDevelopers);

const bar = numbers.some((number) => {
  return number === 0;
});
const foo = numbers.includes(0);
console.log(foo);
console.log(bar);

// obj1 === obj2

const undefinedValue = undefined;
const nullValue = null;
const zeroValue = 0;
const emptyArray = [];
const emptyObject = {};
const emptyString = "";

let bestStudent = null;

if (!bestStudent) {
  // to folan
}
