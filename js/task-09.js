function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
