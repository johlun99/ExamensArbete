
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

// Send actual registration request
function register() {
    $.post("AJAX/register-user.cshtml",
        {
            username: username,
            email: email,
            password: password
        },
        (data, status) => {
            console.log("\nData:\n" + data + "\nStatus:\n" + status);
            
        });
}

// Make sure all inputs in the form is valid in length and format
// (returns false if not)
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
        $("#email").val("").focus();

        valid = false;
    } else if (password.length < 8) {
        printError("Your password needs to be atleast 8 characters long");
        $("#re-password").val("");
        $("#password").val("").focus();

        valid = false;
    } else if (re_password != password) {
        printError("Your passwords doesn't match");
        $("#re-password").val("");
        $("#password").val("").focus();

        valid = false;
    }

    return valid;
}

