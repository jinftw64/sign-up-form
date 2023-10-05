function checkEquality() {
  const password = document.querySelector('#pass');
  const confirm = document.querySelector('#confirm-password');
  const error_msg = document.querySelector('.error-msg');

  if (password.value === confirm.value) {
    password.style.borderColor = '#E5E7EB';
    confirm.style.borderColor = '#E5E7EB';
    if (error_msg) {
      error_msg.remove()
    }
  } else {
    password.style.borderColor = 'red';
    confirm.style.borderColor = 'red';
    if (!error_msg) {
      createErrorDiv()
    }
  }
}

function createErrorDiv() {
  const errorDiv = document.createElement('p');
  const middleDiv = document.querySelector('.middle');

  errorDiv.classList.add('error-msg');
  errorDiv.textContent = '* Passwords do not match'

  middleDiv.appendChild(errorDiv);
}
