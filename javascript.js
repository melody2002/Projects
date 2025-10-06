// Back-To-The-Top Button Function Starts

// Get The Button
var backtotop = document.getElementById("back-to-top-Btn");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backtotop.style.display = "block";  
    }
    else {
        backtotop.style.display = "none";
    }
}

// When user clicks on the button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// Contact Us Function Start
function validateForm() {
    // Reset error Message
    document.getElementById("nameError").innerHTML ="";
    document.getElementById("emailError").innerHTML ="";
    document.getElementById("numberError").innerHTML ="";
    document.getElementById("messageError").innerHTML ="";

    // Get Form Values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").innerHTML ="Name is Required";
        return false;
    }
  
    // Validate Email
    var emialRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emialRegex.test(email)) {
        document.getElementById("emailError").innerHTML ="Invalid email address";
        return false;
    }
 
    // Validate Number
    if (number === "" || isNaN(number)) {
        document.getElementById("numberError").innerHTML ="Invalid Number";
        return false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("messageError").innerHTML ="Message is Required";
        return false;
    }

    // If All Validation pass, The form can be submitted
    alert("Message sent Successfully!");

    // Reset form
    document.getElementById("contactForm").reset();

    // Prevent the form from submitting
    return false;
}
// Contact Us Function Ends



// Login and Signup Function Start
function signupUser() {
    // Display success message
    document.getElementById("signupSuccessMessage").style.display = "block";

    // Reset form
    document.getElementById("signupForm").reset();

    // Redirect to Home page after 1 second
    setTimeout(function() { window.location.href = "Cake.html";}, 1000);
}

function loginUser() {
     // Display success message
     document.getElementById("loginSuccessMessage").style.display = "block";

     // Redirect to Home page after 1 second
    setTimeout(function() { window.location.href = "Cake.html";}, 1000);
}

// Redirect To Home Page Function
function redirectToHome() {
    window.location.href = "Cake.html";
}

function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";
}

function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "flex";
}

// Initially Show The Signup Form
showSignup();

// Login and Signup Function Ends
