const caloriesPerIngredient = {
  flour: 3.6, // per gram
  egg: 78, // per egg
  milk: 0.6, // per gram (e.g. ~60 cal per 100g)
  cheese: 4, // per gram
  tomato: 0.2, // per gram
};

const foods = [
  {
    name: "Cheesy Omelette",
    type: "breakfast",
    ingredients: {
      egg: 2,
      cheese: 30,
      milk: 50,
    },
  },
  {
    name: "Tomato Pasta",
    type: "main",
    ingredients: {
      flour: 100,
      tomato: 80,
      cheese: 20,
    },
  },
  {
    name: "Cheese Pizza",
    type: "main",
    ingredients: {
      flour: 150,
      cheese: 50,
      tomato: 60,
    },
  },
  {
    name: "French Toast",
    type: "snack",
    ingredients: {
      flour: 60,
      egg: 1,
      milk: 80,
    },
  },
  {
    name: "Scrambled Eggs",
    type: "breakfast",
    ingredients: {
      egg: 3,
      milk: 30,
    },
  },
];

const breakfastsOnly = foods
  .filter((food) => {
    return food.type === "breakfast";
  })
  .map((food) => {
    return food.name;
  });
console.log(breakfastsOnly);

const searchFood = (foodName) => {
  return foods.find((food) => {
    return food.name === foodName;
  });
};

const getFoodIngredients = (foodName) => {
  const searchedFood = searchFood(foodName);
  if (!searchedFood) {
    return [];
  }

  return Object.keys(searchedFood.ingredients);
};
console.log(getFoodIngredients("Cheesy Omelette"));

const getFoodCalories = (foodName) => {
  const searchedFood = searchFood(foodName);
  if (!searchedFood) {
    return 0;
  }
  console.log(searchedFood);

  // return Object.entries(searchedFood.ingredients).map((item) => {
  //     const ingName = item[0]
  //     const ingCount = item[1]
  //     return caloriesPerIngredient[ingName] * ingCount
  // }).reduce((acc, cur) => {
  //     return acc + cur
  // }, 0)
  return Object.entries(searchedFood.ingredients).reduce((acc, cur) => {
    return acc + caloriesPerIngredient[cur[0]] * cur[1];
  }, 0);
};
console.log(getFoodCalories("Cheesy Omelette")); // (2 * 78) + (30 * 4) + (50 * 0.6) = 306

const searchFoodsByIng = (ingName) => {
  return foods
    .filter((food) => {
      // return Object.keys(food.ingredients).some((ing) => ing === ingName)
      // return Object.keys(food.ingredients).includes(ingName)
      console.log(food.ingredients[ingName]);

      return food.ingredients[ingName];
    })
    .map((food) => {
      return food.name;
    });
};
console.log(searchFoodsByIng("tomato"));

console.log(true || false);
console.log(true && false);

const returnTrue = () => {
  console.log("inside return true");

  return true;
};
const returnFalse = () => {
  console.log("inside return false");

  return false;
};

// console.log(returnTrue() || returnFalse());
// console.log(returnFalse() && returnTrue());

console.log(true && "Jay");
console.log(false || "Jay");
// console.log(getFoodCalories('Khiar')|| 'I dont know what Khiar is');
// console.log(getFoodIngredients('Kabob').length || 'Kabob not found');
// console.log(getFoodCalories('Cheesy Omelette') && 'Youll get fat');

console.log(true ? "yes" : "no");

console.log(
  getFoodIngredients("French Toast").includes("egg")
    ? "dont eat. hight Col"
    : "ok to eat"
);

const getFoodIngredients2 = (foodName) => {
  const searchedFood = searchFood(foodName);
  return searchedFood ? Object.keys(searchedFood.ingredients) : [];
};

const getFoodIngredients3 = (foodName) => {
  // const searchedFood = searchFood(foodName)
  // console.log(searchedFood);
  // console.log(searchedFood?.ingredients);

  // return searchedFood ? Object.keys(searchedFood.ingredients) : []
  return Object.keys(searchFood(foodName)?.ingredients || {});
};

console.log(getFoodIngredients3("Goo"));
console.log(getFoodIngredients3("Cheesy Omelette"));

if (true) console.log("yes");

console.log(
  [1, 2, 3].map((item) => {
    return item * 2;
  })
);
console.log([1, 2, 3].map((item) => item * 2));
