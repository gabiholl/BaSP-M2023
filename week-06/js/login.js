var InputValue = [];

var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");

//Continue button
var loginBtn = document.getElementById("submitBtn");

//Error Msgs
var errorMsgs = document.getElementsByClassName("error-msg")
var emailErrorMsg = document.getElementById("email-error-msg")
var passErrorMsg = document.getElementById("password-error-msg")


//Email validation
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

emailInput.onblur = function () {
    if (!emailExpression.test(emailInput.value)) {
        emailInput.classList.add("errors");
        emailErrorMsg.style.display = "flex";
    } else {
        emailInput.classList.add("border-correct");
        InputValue[0] = emailInput.value;
    }
}

emailInput.onfocus = function () {
    emailInput.classList.remove("errors");
    emailInput.classList.remove("border-correct");
    emailErrorMsg.style.display = "none";
}


//Password validation

passInput.onblur = function () {
    var password = passInput.value;
    var hasBigLetter = false;
    var hasSmallLetter = false;
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);
        if (char >= "0" && char <= "9") {
        hasNumber = true;
        } else if (char === char.toUpperCase()) {
        hasBigLetter = true;
        } else if (char === char.toLowerCase()) {
        hasSmallLetter = true;
        }
        if (!hasBigLetter || !hasSmallLetter || !hasNumber) {
            passInput.classList.add("errors");
            passErrorMsg.style.display = "block";
        } else {
            passInput.classList.add("border-correct");
            passInput.classList.remove("errors");
            passErrorMsg.style.display = "none";
            InputValue[1] = passInput.value;
        }
    }
}

passInput.onfocus = function () {
    passInput.classList.remove("errors");
    passInput.classList.remove("border-correct");
    passErrorMsg.style.display = "none";
}


//Continue button validation

var loginBtn = document.getElementById("submitBtn");
loginBtn.onclick = function(e){
    e.preventDefault();
    if(InputValue.includes(emailInput.value) && InputValue.includes(passInput.value))
        console.log("login")
        alert('Welcome!' + '\n' + 'Email: ' + InputValue[0] + '\n' +
            'Password ' + InputValue[1])
}