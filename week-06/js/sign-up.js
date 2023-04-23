var InputValue = [];

var nameInput = document.getElementById("name");
var lastnameInput = document.getElementById("lastname");
var dniInput = document.getElementById("dni");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var repeatInput = document.getElementById("repeat-password");
var dateInput = document.getElementById("date-of-birth");
var adressInput = document.getElementById("adress");
var cityInput = document.getElementById("city");
var stateInput = document.getElementById("state");
var postalInput = document.getElementById("postal-code");
var phoneInput = document.getElementById("phone-number");

//Error Msgs
var errorMsgs = document.getElementsByClassName("error-msg");
var nameErrorMsg = document.getElementById("name-error-msg");
var lastnameErrorMsg = document.getElementById("lastname-error-msg");
var dniErrorMsg = document.getElementById("dni-error-msg");
var emailErrorMsg = document.getElementById("email-error-msg");
var passErrorMsg = document.getElementById("password-error-msg");
var repeatErrorMsg = document.getElementById("pass-rep-error-msg");
var dateErrorMsg = document.getElementById("date-error-msg");
var adressErrorMsg = document.getElementById("adress-error-msg");
var cityErrorMsg = document.getElementById("city-error-msg");
var stateErrorMsg = document.getElementById("state-error-msg");
var postalErrorMsg = document.getElementById("pc-error-msg");
var phoneErrorMsg = document.getElementById("phone-error-msg");

//Continue button
var loginBtn = document.getElementById("submitBtn");

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
    console.log("entro al blur")
    var password = passInput.value;
    var hasBigLetter   = false;
    var hasSmallLetter = false;
    var hasNumber      = false;
    for (var i = 0; i < password.length; i++) {
        console.log("validando")
        var charCode = password.charCodeAt(i);
        if(charCode > 47 && charCode < 58)
            hasNumber = true;
        if(charCode > 64 && charCode < 91)
            hasBigLetter = true;
        if(charCode > 96 && charCode < 123)
            hasSmallLetter = true;
        if(!hasBigLetter && !hasSmallLetter && !hasNumber) {
            console.log("entre en el if")
            passInput.classList.add("errors");
            passErrorMsg.style.display = "flex";
        } else {
            console.log("else")
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