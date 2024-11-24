function init()
    {
    var email = ""; 
    var emailInput = document.getElementById("email");
    var subscribeButton = document.getElementById("subscribe");
    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var confirmationMessage = "Please ensure the email you have provided is correct: " + email;
        
        if (confirm(confirmationMessage)) {
            alert("Thank you for subscribing to our newsletter!");
            emailInput.value = "";  
        }
    });

    emailInput.addEventListener("focus", function () {
        emailInput.style.borderColor = "blue";
    });

    emailInput.addEventListener("blur", function () {
        emailInput.style.borderColor = "";
    });
}

window.addEventListener("load", init, false);
