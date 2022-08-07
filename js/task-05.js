const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  //    event.currentTarget.value = output.textContent

  if (input.value === "") {
    return (output.textContent = "Anonymous");
  } else output.textContent = event.currentTarget.value;
}

// if (event.currentTarget.value === '') {
//     output.textContent = 'Anonymous'
// }
