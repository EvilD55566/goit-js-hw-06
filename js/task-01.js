const categoriesList = document.querySelectorAll(".item");
console.log(categoriesList);
console.log(categoriesList.length);

categoriesList.forEach((item) => {
  console.log(`Category:${item.children[0].textContent} `);
  console.log(`Elements:${item.children[1].children.length}`);
});
