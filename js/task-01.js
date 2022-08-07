const categoriesList = document.querySelectorAll(".item");
console.log(categoriesList);
console.log(categoriesList.length);

categoriesList.forEach((item) => {
  console.log(`Category:${item.firstElementChild.textContent} `);
  console.log(`Elements:${item.lastElementChild.children.length}`);
});
