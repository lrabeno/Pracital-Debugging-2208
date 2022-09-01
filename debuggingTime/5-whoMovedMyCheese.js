let ingredients = {
  bread: {
    kind: "rye",
  },
  cheese: {
    kind: "stilton",
  },
  lettuce: {
    kind: "butter",
  },
};

console.log(ingredients);

function sliceCheese(sandwich, cheese) {
  return "1 slice of" + cheese;
}

function makeASandwich() {
  let sandwich = [];
  sandwich.push(ingredients.bread.kind + " bread");
  sandwich.push(sliceCheese(ingredients.cheese));
  sandwich.push(sliceCheese(ingredients.cheese));
  sandwich.push(ingredients.lettuce.kind + " lettuce");
  sandwich.push(ingredients.bread.kind + " bread");
  return sandwich;
}

makeASandwich();
