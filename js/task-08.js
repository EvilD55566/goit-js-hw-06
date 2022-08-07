const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((password, email) => {
    console.log(email);
    console.log(password);
  });

  // const formEmail = event.currentTarget.elements.email.value
  // const formPassword = event.currentTarget.elements.password.value

  // if (formEmail === '' || formPassword === '') {
  //     return alert('Please fill in all the fields!')
  // }

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userObj = {
    email: email.value,
    password: password.value,
  };
  console.log(userObj);
  event.currentTarget.reset();
}
