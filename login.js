let inputLogin = document.querySelector('.login');
let inputPswrd = document.querySelector('.password');
let btnLogin = document.querySelector('.login-button');

btnLogin.onclick = function() {
    if (inputLogin.value === '' && inputPswrd.value === '') {
        console.log('detected')
    }
}

console.log(inputLogin, inputPswrd, btnLogin)