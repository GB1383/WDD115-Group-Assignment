const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// e = event parameter
form.addEventListener("submit", (e) => {
  // prevent form submisson, unless all inputs are valid
  e.preventDefault();
  // check input function
  checkInputs();
});

function checkInputs() {
  // Trim all whitespace
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Check for username input
  if (usernameValue === "") {
    setError(username, "Error: username cannot be empty");
  } else {
    setSuccess(username);
  }

  // Check for password input
  if (passwordValue === "") {
    setError(password, "Error: password cannot be empty");
  } else {
    setSuccess(password);
  }

  // Check for Confirm password input
  if (password2Value == "") {
    setError(password2, "Error: password cannot be empty");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Error: passwords do not match");
  } else {
    setSuccess(password2);
  }
}

// Display error: errors are contained inside a function. they are locally scoped to avoid accidentally using similar variable names globally
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.textContent = message;
}

// Display success when input is valid and scope locally
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
