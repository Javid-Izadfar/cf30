console.log(212);

const number = 44;
console.log(number);

const var_with_multiple_words = "jay";
console.log(var_with_multiple_words);

const num_or_str = "55";

// var, const, let

let favorite_food = "pizza";
console.log(favorite_food);

favorite_food = "burger";
console.log(favorite_food);

// + - * /
const num1 = 1;
const num2 = 2;
const sum1 = num1 + num2;
console.log(sum1);

const a_formula = (2 + 4) * (6 / 5) + 3;
console.log(a_formula);

// int: 1, 2, 124512512, 9
// float: 1.2, 5.6, 10.000000000000001

// fat-arrow function
const func1 = () => {
  return "returned value";
};
const result1 = func1();
console.log(result1);
console.log(func1());

const func2 = (input) => {
  return input + 1;
};
const result2 = func2(3);
console.log(result2);
console.log(func2(5));
console.log(func2("ali"));

const func3 = (a, b) => {
  return a + b;
};
const result3 = func3(1, 2);
console.log(result3);

// loop
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// 5 => 1 + 2 + 3 + 4 + 5
const sum = (input) => {
  let result = 0;

  for (let index = 1; index <= input; index++) {
    result = result + index;
  }

  return result;
};

// 5 => 15
console.log(sum(5));
// 6 => 21
console.log(sum(6));
// 2 => 3
console.log(sum(2));

console.log(1 * 0);
console.log(0 * 1);
console.log(0 / 1);
console.log(1 / 0);

console.log(Infinity + Infinity);

console.log(1 + 1);
console.log(1 + "1");
console.log("1" + 1);
console.log("1" + "1");
console.log(1 - "1");
console.log(1 - 1);
console.log("1" - 1);
console.log("1" - "1");
console.log(1 * "1");
console.log(1 * "jay");
// NaN = Not a Number

console.log(typeof "jay");
console.log(typeof 213);
console.log(typeof "213");
console.log(typeof NaN);

const bool1 = true;
const bool2 = false;
console.log(typeof bool1);

if (bool1) {
  console.log("yes");
}

if (bool2) {
  console.log("yes");
} else {
  console.log("no");
}

const func4 = (input) => {
  // let result = 0
  // if (input < 10) {
  //     result = input + 2
  // } else {
  //     result = 10
  // }
  // return result

  // let result = 10
  // if (input < 10) {
  //     result = input + 2
  // }
  // return result

  if (input < 10) {
    return input + 10;
  }
  return 10;
};

console.log(func4(5));

console.log(12 % 2);
console.log(13 % 2);

if (13 % 2) {
  console.log("is odd");
}

if (12 % 2) {
  console.log("is odd");
} else {
  console.log("is even");
}

console.log(!true);
console.log(!false);

console.log(!!true);
console.log(!!false);

console.log(!1);
console.log(!0);

console.log(!!1);
console.log(!!0);

// and: &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// or: ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log((true && true) || (true && true));
console.log((true && false) || true);

console.log(!!"Jay");
console.log(!!"");

console.log(1 === 2);
console.log(1 == 2);

console.log("1" == 1);
console.log("1" === 1);

console.log(1 == true);
console.log(0 === false);
console.log(!!0 === false);

console.log(1 !== 2);
console.log(!(1 === 2));

console.log(foo("james", 40));
console.log(foo("jay", 31));
