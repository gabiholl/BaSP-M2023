var InputValue = [];

var nameInput = document.getElementById("name");
var lastNameInput = document.getElementById("lastname");
var dniInput = document.getElementById("dni");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var repeatInput = document.getElementById("repeat-password");
var dateInput = document.getElementById("date-of-birth");
var addressInput = document.getElementById("address");
var cityInput = document.getElementById("city");
var stateInput = document.getElementById("state");
var postalInput = document.getElementById("postal-code");
var phoneInput = document.getElementById("phone-number");

//Error Msgs
var errorMsgs = document.getElementsByClassName("error-msg");
var nameErrorMsg = document.getElementById("name-error-msg");
var lastNameErrorMsg = document.getElementById("lastname-error-msg");
var dniErrorMsg = document.getElementById("dni-error-msg");
var emailErrorMsg = document.getElementById("email-error-msg");
var passErrorMsg = document.getElementById("password-error-msg");
var repeatErrorMsg = document.getElementById("pass-rep-error-msg");
var dateErrorMsg = document.getElementById("date-error-msg");
var addressErrorMsg = document.getElementById("address-error-msg");
var cityErrorMsg = document.getElementById("city-error-msg");
var stateErrorMsg = document.getElementById("state-error-msg");
var postalErrorMsg = document.getElementById("pc-error-msg");
var phoneErrorMsg = document.getElementById("phone-error-msg");

//Continue button
var loginBtn = document.getElementById("submitBtn");

//Name validation
var nameInput = document.getElementById("name");
nameInput.onblur = function () {
    if (nameInput.value.length < 4) {
        console.log("pasoa");
        nameInput.classList.add("errors");
        nameErrorMsg.style.display = "flex";
    } else {
        console.log("pasob");
        nameInput.classList.add("border-correct");
        nameInput.classList.remove("errors");
        nameErrorMsg.style.display = "none";
        InputValue[0] = nameInput.value;
    }
}

nameInput.onfocus = function () {
    console.log("focus");
    nameInput.classList.remove("errors");
    nameInput.classList.remove("border-correct");
    nameErrorMsg.style.display = "none";
}


//Lastname validation
var lastNameInput = document.getElementById("lastname");
lastNameInput.onblur = function () {
    lastNameValue = lastNameInput.value;
    if (lastNameValue.length < 4) {
        console.log("pasoa");
        lastNameInput.classList.add("errors");
        lastNameErrorMsg.style.display = "flex";
    } else {
        console.log("pasob");
        lastNameInput.classList.add("border-correct");
        lastNameInput.classList.remove("errors");
        lastNameErrorMsg.style.display = "none";
        InputValue[1] = lastNameInput.value;
    }
}

lastNameInput.onfocus = function () {
    console.log("focus");
    lastNameInput.classList.remove("errors");
    lastNameInput.classList.remove("border-correct");
    lastNameErrorMsg.style.display = "none";
}

//dni validation
var dniInput = document.getElementById("dni");
dniInput.onblur = function () {
    dniValue = dniInput.value;
    hasNumber = false;
    for (var i = 0; i < dniValue.length; i++) {
        var char = dniValue.charAt(i);
        if (char >= "0" && char <= "9") {
        hasNumber = true;
        }
        if ((dniValue.length < 7) || (!hasNumber)) {
            console.log("pasoa");
            dniInput.classList.add("errors");
            dniErrorMsg.style.display = "flex";
        } else {
            console.log("pasob");
            dniInput.classList.add(".border-correct");
            dniInput.classList.remove("errors");
            dniErrorMsg.style.display = "none";
            InputValue[2] = dniValue;
        }
    }
}

dniInput.onfocus = function () {
    console.log("focus");
    dniInput.classList.remove("errors");
    dniInput.classList.remove("border-correct");
    dniErrorMsg.style.display = "none";
}

//date of birth validation

var dateInput = document.getElementById("date-of-birth");
dateInput.onblur = function () {
var validatedDate =  dateInput.value.split("-", 3);
    console.log(validatedDate)
    if (dateInput.value.length == 0){
        dateInput.classList.add("errors");
        dateErrorMsg.style.display = "flex";
    } else if (validatedDate[0] > 2023) {
        dateInput.classList.add("errors");
        dateInput.classList.remove(".border-correct");
        dateErrorMsg.style.display = "flex";
    }
}

    dateInput.onfocus = function () {
        console.log("focus");
        dateInput.classList.remove("errors");
        dateInput.classList.remove("border-correct");
        dateErrorMsg.style.display = "none";
    }


//Email validation
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

emailInput.onblur = function () {
    if (!emailExpression.test(emailInput.value)) {
        emailInput.classList.add("errors");
        emailErrorMsg.style.display = "flex";
    } else {
        emailInput.classList.add("border-correct");
        InputValue[3] = emailInput.value;
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
            InputValue[4] = passInput.value;
        }
    }
}

passInput.onfocus = function () {
    passInput.classList.remove("errors");
    passInput.classList.remove("border-correct");
    repeatErrorMsg.style.display = "none";
}

//repeat password
repeatInput.onblur = function () {
    var passValue = passInput.value;
    var repeatPass = repeatInput.value;
    if (passValue != repeatPass) {
        repeatInput.classList.add("errors");
        repeatErrorMsg.style.display = "block";
    } else {
        repeatInput.classList.add("border-correct");
        repeatInput.classList.remove("errors");
        repeatErrorMsg.style.display = "none";
        InputValue[5] = repeatInput.value;
    }
}

repeatInput.onfocus = function () {
    repeatInput.classList.remove("errors");
    repeatInput.classList.remove("border-correct");
    cityErrorMsg.style.display = "none";
}

// address validation
var addressInput = document.getElementById("address");
addressInput.onblur = function () {
    address = addressInput.value;
    hasNumber = false;
    words = addres
    function hasWhiteSpace(words) {
        return words.indexOf(' ') >= 0;
    }
    for (var i = 0; i < address.length; i++) {
        var char = address.charAt(i);
        if (char >= "0" && char <= "9") {
        hasNumber = true;
        }
        if ((address.length > 5) || (hasWhiteSpace > 0)) {
            addressInput.classList.add("errors");
            addressErrorMsg.style.display = "block";
        } else {
            addressInput.classList.add("border-correct");
            addressInput.classList.remove("errors");
            addressErrorMsg.style.display = "none";
            InputValue[10] = addressInput.value;
        }
    if (addressInput.value.length < 4) {
        console.log("pasoa");
        addressInput.classList.add("errors");
        addressErrorMsg.style.display = "flex";
    } else {
        console.log("pasob");
        addressInput.classList.add("border-correct");
        addressInput.classList.remove("errors");
        addressErrorMsg.style.display = "none";
        InputValue[8] = addressInput.value;
    }
}

addressInput.onfocus = function () {
    addressInput.classList.remove("errors");
    addressInput.classList.remove("border-correct");
    addressErrorMsg.style.display = "none";
}

// City validation
var cityInput = document.getElementById("city");
cityInput.onblur = function () {
    if (cityInput.value.length < 4) {
        console.log("pasoa");
        cityInput.classList.add("errors");
        cityErrorMsg.style.display = "flex";
    } else {
        console.log("pasob");
        cityInput.classList.add("border-correct");
        cityInput.classList.remove("errors");
        cityErrorMsg.style.display = "none";
        InputValue[8] = cityInput.value;
    }
}

cityInput.onfocus = function () {
    cityInput.classList.remove("errors");
    cityInput.classList.remove("border-correct");
    cityErrorMsg.style.display = "none";
}

// state validation
var stateInput = document.getElementById("state");
stateInput.onblur = function () {
    if (stateInput.value.length < 4) {
        console.log("pasoa");
        stateInput.classList.add("errors");
        stateErrorMsg.style.display = "flex";
    } else {
        console.log("pasob");
        stateInput.classList.add("border-correct");
        stateInput.classList.remove("errors");
        stateErrorMsg.style.display = "none";
        InputValue[9] = stateInput.value;
    }
}

stateInput.onfocus = function () {
    stateInput.classList.remove("errors");
    stateInput.classList.remove("border-correct");
    stateErrorMsg.style.display = "none";
}


//postal code validation
postalInput.onblur = function () {
    var postal = postalInput.value;
    var hasNumber = false;
    for (var i = 0; i < postal.length; i++) {
        var char = postal.charAt(i);
        if (char >= "0" && char <= "9") {
        hasNumber = true;
        }
        if ((postal.length < 4 || postal.length > 5) || (!hasNumber)) {
            postalInput.classList.add("errors");
            postalErrorMsg.style.display = "block";
        } else {
            postalInput.classList.add("border-correct");
            postalInput.classList.remove("errors");
            postalErrorMsg.style.display = "none";
            InputValue[10] = postalInput.value;
        }
    }
}

postalInput.onfocus = function () {
    postalInput.classList.remove("errors");
    postalInput.classList.remove("border-correct");
    postalErrorMsg.style.display = "none";
}


//phone number validation
phoneInput.onblur = function () {
    var phone = phoneInput.value;
    var hasNumber = false;
    for (var i = 0; i < phone.length; i++) {
        var char = phone.charAt(i);
        if (char >= "0" && char <= "9") {
        hasNumber = true;
        }
        if ((phone.length != 10) || (!hasNumber)) {
            phoneInput.classList.add("errors");
            phoneErrorMsg.style.display = "block";
        } else {
            phoneInput.classList.add("border-correct");
            phoneInput.classList.remove("errors");
            phoneErrorMsg.style.display = "none";
            InputValue[10] = phoneInput.value;
        }
    }
}

phoneInput.onfocus = function () {
    phoneInput.classList.remove("errors");
    phoneInput.classList.remove("border-correct");
    phoneErrorMsg.style.display = "none";
    }
}

//Continue button validation

var loginBtn = document.getElementById("submitBtn");
loginBtn.onclick = function(e){
    e.preventDefault();
    if(InputValue.includes(emailInput.value) && InputValue.includes(passInput.value)){
        console.log("login")
        alert('Signed up successfully!' + '\n' + 'Name: ' + InputValue[0] + '\n' +
            'Lastname ' + InputValue[1] + '\n' +
            'DNI ' + InputValue[2] + '\n' +
            'Email ' + InputValue[3] + '\n' +
            'Password ' + InputValue[4] + '\n' +
            'Repeat Password ' + InputValue[5] + '\n' +
            'Date of Birth ' + InputValue[6] + '\n' +
            'Adress ' + InputValue[7] + '\n' +
            'City ' + InputValue[8] + '\n' +
            'State ' + InputValue[9] + '\n' +
            'Postal Code ' + InputValue[10] + '\n' +
            'Phone number ' + InputValue[11])
        }
    }

    loginBtn.onclick = function(e) {
        var sentence = "One or more fields are empty. Please fill the entire form.";
        e.preventDefault();
        
        var nameInput = document.getElementById("name");
        var lastNameInput = document.getElementById("lastname");
        var dniInput = document.getElementById("dni");
        var emailInput = document.getElementById("email");
        var passInput = document.getElementById("password");
        var repeatInput = document.getElementById("repeat-password");
        var dateInput = document.getElementById("date-of-birth");
        var addressInput = document.getElementById("address");
        var cityInput = document.getElementById("city");
        var stateInput = document.getElementById("state");
        var postalInput = document.getElementById("postal-code");
        var phoneInput = document.getElementById("phone-number");
        
        if (nameInput.value === ''|| lastNameInput.value === ''|| 
        dniInput.value === ''|| emailInput.value === ''|| passInput.value === '' || 
        repeatInput.value === ''|| dateInput.value === ''|| addressInput.value === ''|| 
        cityInput.value === ''|| stateInput.value === ''|| postalInput.value === ''|| phoneInput.value === '') {
        console.log("loginEmpty");
        alert(sentence);
        }
    };

