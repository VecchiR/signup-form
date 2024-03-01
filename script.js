document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
let flagValidatePassword = false;

password.addEventListener('change', validatePassword); 
password.addEventListener('keyup', validatePassword); 
confirmPassword.addEventListener('keyup', checkPasswordMatch); 


function checkPasswordMatch() {
  if (confirmPassword.value === password.value) {
    confirmPassword.setCustomValidity('');
  } else {
    confirmPassword.setCustomValidity('Passwords do not match');
    confirmPassword.reportValidity();
  }
}

function validatePassword(e) {
  switch (true) {
    case e.type === 'change':
      flagValidatePassword = true;
    case flagValidatePassword == true:
      if(password.value.length < 6){
        password.setCustomValidity('Your password is too short!');
        password.reportValidity();
      }
      else {
        password.setCustomValidity('');
      }
  }
}