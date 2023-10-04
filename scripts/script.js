function checkEquality() {
  const password = document.querySelector('#pass');
  const confirm = document.querySelector('#confirm-password');

  if (password.value === confirm.value) {
    password.style.borderColor = '#E5E7EB';
    confirm.style.borderColor = '#E5E7EB';
  } else {
    password.style.borderColor = 'red';
    confirm.style.borderColor = 'red';
  }
}

function createErrorDiv() {
  const errorDiv = document.createElement('p');
  const middleDiv = document.getElementsByClassName('.middle');

  errorDiv.textContent = '* Passwords do not match'

  middleDiv.appendChild(errorDiv);
}
