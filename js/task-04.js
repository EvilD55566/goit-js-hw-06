let counterValue = 0;

const BtnIncr = document.querySelector('[data-action="increment"]');
const BtnDecr = document.querySelector('[ data-action="decrement"]');
const displayValue = document.querySelector("#value");
console.log(BtnIncr);
console.log(BtnDecr);
console.log(displayValue);

BtnIncr.addEventListener("click", (event) => {
  counterValue += 1;
  displayValue.textContent = counterValue;
});

BtnDecr.addEventListener("click", (event) => {
  counterValue -= 1;
  displayValue.textContent = counterValue;
});
