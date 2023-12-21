const inputElement = document.querySelector(".email");
const arrowBtn = document.querySelector(".arrow-btn");
const message = document.querySelector(".error-message");

arrowBtn.addEventListener("click", () => {
  //   const inputElement = document.querySelector(".arrow");
  //   const inputEl = (inputElement.value = "");
  validateForm();
});

function validateForm() {
  const emailInput = document.querySelector(".email");
  const errorMessage = document.querySelector(".error-message");

  // Basic email validation
  let emailRegex = /^\S+@\S+\.\S+$/;
  let isValidEmail = emailRegex.test(emailInput.value);

  if (!isValidEmail) {
    errorMessage.innerHTML = "Please provide a valid email";
    emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    emailInput.style.backgroundImage = "url(./images/icon-error.svg)";
    emailInput.style.backgroundRepeat = "no-repeat";
    emailInput.style.backgroundPosition = "72% center";

    return false; // Prevent form submission
  } else {
    emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
    emailInput.style.backgroundImage = "none";
    return true; // Allow form submission
  }
}
