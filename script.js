function validation() {
    let username = document.getElementById('email').value
    let password = document.getElementById('password').value;
    let msg= document.getElementById("msg");
    msg.style.color ="red";
    if(username == ""){
        msg.textContent = "enter username";
        return false;
    } else if (password == ""){
        msg.textContent = "enter the password";
        return false;
    } else if (password.length < 6){
        msg.textContent = "password should be at least 6 characters long";
        return false;
    } else {
        msg.textContent = "";
        return true;
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if(validation()) {
        document.querySelector(".guess-game").style.display = "block";
        document.querySelector(".login-form form").style.display = "none";
    }
});

function guessgame() {
    let random_number = 10;
    let numbergameInput = document.getElementById('numbergame');
    let userGuess = parseInt(numbergameInput.value); // Get the user-input value and convert it to a number
    let msg1= document.getElementById("msg1");
    msg1.style.color ="red";
    
    if (random_number === userGuess) {
        msg1.textContent="won";
    } else {
        msg1.textContent="lost";
    }
}
