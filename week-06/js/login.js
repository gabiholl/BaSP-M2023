var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var loginBtn = document.getElementsByClassName ("continue");

//Error Msgs
var errorMsgs = document.getElementsByClassName("error-msg")
var emailErrorMsg = document.getElementById("email-error-msg")
var passErrorMsg = document.getElementById("password-error-msg")

//el else tiene que ser lo que esta bien
// cartel verde de exito cuando esta todo bien y le das al continue

//Email validation
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var InputValue = [];


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
    var hasBigLetter   = false;
    var hasSmallLetter = false;
    var hasNumber      = false;
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if(charCode > 47 && charCode < 58)
            hasNumber = true;
        if(charCode > 64 && charCode < 91)
            hasBigLetter = true;
        if(charCode > 96 && charCode < 123)
            hasSmallLetter = true;
        if(hasBigLetter && hasSmallLetter && hasNumber) {
            passInput.classList.add("border-correct");
            passInput.classList.remove("errors");
            passErrorMsg.style.display = "none";
        } else {
            passInput.classList.add("errors");
            passErrorMsg.style.display = "flex";
        }
    }
}

passInput.onfocus = function () {
    passInput.classList.remove("errors");
    passInput.classList.remove("border-correct");
    passErrorMsg.style.display = "none";
}
