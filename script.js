const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');
const button = document.querySelector('#button');

// function to move the error message after the button if screen size is more than 700px
function moveErrorMessage() {
  if (window.innerWidth > 700) {
    button.insertAdjacentElement('afterend', errorMessage);
  } else {
    form.insertBefore(errorMessage, emailInput.nextElementSibling);
  }
}

// call the moveErrorMessage function when the page loads
moveErrorMessage();

// call the moveErrorMessage function when the window is resized
window.addEventListener('resize', moveErrorMessage);

form.addEventListener('submit', function(event) {
  // prevent the form from submitting
  event.preventDefault();

  // check if the email address is valid
  if (!isValidEmail(emailInput.value)) {
    // if the email address is invalid, show the error message
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please provide a valid email address';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)'; 
  } else {
    // if the email address is valid, submit the form
    form.submit();
  }
});

function isValidEmail(email) {
  // use a regular expression to validate the email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// remove the "required" attribute from the email input field
emailInput.removeAttribute('required');
