const form = document.getElementById("signup-form");
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const InputPassword = document.getElementById("password");

// add event
form.addEventListener("submit", validateForm);

let regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateForm(e) {
  e.preventDefault();
  checkFields();
}

function checkFields() {
  // assign the value
  const firstName = inputFirstName.value.trim();

  const lastName = inputLastName.value.trim();

  const email = inputEmail.value.trim();

  const password = InputPassword.value.trim();

  // select all inputs imgs and errors
  const inputs = document.querySelectorAll(".input");
  const imgs = document.querySelectorAll(".image");
  const errors = document.querySelectorAll(".error");

  // set timeout to remove the errors
  setTimeout(() => {
    imgs.forEach((img) => {
      img.classList.remove("active");
    });

    errors.forEach((error) => {
      error.textContent = "";
    });

    inputs.forEach((input) => {
      input.classList.remove("wrong");
      inputs[2].placeholder = "Email Address";
    });
  }, 3000);

  if (!firstName) {
    errors[0].textContent = "First Name cannot be empty";
    imgs[0].classList.add("active");
    inputs[0].classList.add("wrong");
  }

  if (!lastName) {
    errors[1].textContent = "Last Name cannot be empty";
    imgs[1].classList.add("active");
    inputs[1].classList.add("wrong");
  }

  if (!regEmail.test(email)) {
    errors[2].textContent = "Looks like this is not email";
    imgs[2].classList.add("active");
    inputs[2].classList.add("wrong");
    inputs[2].placeholder = "example@gmail.com";
  }

  if (!password) {
    errors[3].textContent = "Password cannot be empty";
    imgs[3].classList.add("active");
    inputs[3].classList.add("wrong");
  }
}
