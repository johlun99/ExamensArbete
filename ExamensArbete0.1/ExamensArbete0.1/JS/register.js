
var username;
var email;
var password;

$(document).ready(() => {
    $("#username").focus();
});

$("#register-form").submit((e) => {
    e.preventDefault();

    if (validateForm()) {
        printError("The form is valid!");
    }
});

function register() {

}

function validateForm() {
    username = $("#username").val();
    email = $("#email").val();
    password = $("#password").val();
    var re_password = $("#re-password").val();
    var valid = true;

    if (username.length < 5) {
        printError("Your username needs to be at least 5 characters");
        $("#username").val("").focus();

        valid = false;
    } else if (email.length == 0) {
        printError("You must enter an email!");
        $("#email").val("").focus();

        valid = false;
    } else if (!validateEmail(email)) {
        printError("Your email doesn't look real");
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function printError(msg) {
    alert(msg);
}