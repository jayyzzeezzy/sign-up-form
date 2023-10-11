const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const passwordError = document.querySelector('.password-error');
const confirmPasswordError = document.querySelector('.confirm-password-error');

let passwordInput = '';
let confirmPasswordInput = '';

function turnOnMismatch(obj) {
    obj.classList.add('mismatch');
};

function turnOffMismatch(obj) {
    obj.classList.remove('mismatch');
};

password.addEventListener('input', (e) => {
    passwordInput = e.target.value;
    if (passwordInput !== confirmPasswordInput) {
        passwordError.textContent = "*Passwords do not match!";
        turnOnMismatch(password);
    }
    else {
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        turnOffMismatch(password);
        turnOffMismatch(confirmPassword);
    }
});

confirmPassword.addEventListener('input', (e) => {
    confirmPasswordInput = e.target.value;
    if (confirmPasswordInput !== passwordInput) {
        confirmPasswordError.textContent = "*Passwords do not match!";
        turnOnMismatch(confirmPassword);
    }
    else {
        confirmPasswordError.textContent = "";
        passwordError.textContent = "";
        turnOffMismatch(confirmPassword);
        turnOffMismatch(password);
    };
});