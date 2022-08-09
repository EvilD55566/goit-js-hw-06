let counterValue = 0;

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[ data-action="decrement"]');
const displayValue = document.querySelector("#value");

function handleCounterClick({ target }) {
  if (target.dataset.action === "decrement") {
    counterValue--;
    displayValue.textContent = counterValue;
  }
  if (target.dataset.action === "increment") {
    counterValue++;
    displayValue.textContent = counterValue;
  }
}

decrement.addEventListener("click", handleCounterClick);

increment.addEventListener("click", handleCounterClick);
