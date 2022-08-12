const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.querySelector("#ingredients");
// const itemElArray = [];

// ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
//   itemElArray.push(itemEl);
// });

// ingredientsList.append(...itemElArray);
// console.log(ingredientsList);



// const ingredientsList = document.querySelector("#ingredients");

// const resultFunction =  ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
// return itemEl
// });

// ingredientsList.append(...resultFunction);
// console.log(ingredientsList);


const ingredientsList = document.querySelector("#ingredients");

const result = ingredients.map((ingredient) => {
  const itemEl = `<li class = "item">${ingredient}</li>`;
  return itemEl
}).join("");

ingredientsList.insertAdjacentHTML("afterbegin",result);
console.log(ingredientsList);
