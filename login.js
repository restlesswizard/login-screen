let inputLogin = document.querySelector('.login');
let inputPswrd = document.querySelector('.password');
let btnLogin = document.querySelector('.login-button');

btnLogin.onclick = function() {
    if (inputLogin.value === '' && inputPswrd.value === '') {
        btnLogin.insertAdjacentHTML('beforebegin', '<div class="err-msg-box"><div class="err-text">Incorrect login or password</div></div>')
    }
    else {
        
    }
}

console.log(inputLogin, inputPswrd, btnLogin)