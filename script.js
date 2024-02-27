document.addEventListener("DOMContentLoaded", function () {
    const loginFormContainer = document.getElementById("loginFormContainer");
    const registrationFormContainer = document.getElementById("registrationFormContainer");

    function showRegistrationForm() {
        loginFormContainer.style.display = 'none';
        registrationFormContainer.style.display = 'block';
    }

    function showLoginForm() {
        loginFormContainer.style.display = 'block';
        registrationFormContainer.style.display = 'none';
    }

    function validateLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        // Basic validation, replace with actual authentication logic
        if (username === "admin" && password === "adminpass" && role === "admin") {
            alert("Admin Login Successful. Redirecting to Admin Panel...");
            // Redirect to admin panel
        } else if (username === "user" && password === "userpass" && role === "user") {
            alert("User Login Successful. Redirecting to Shopping Page...");
            // Redirect to shopping page
        } else {
            alert("Invalid credentials. Please try again.");
        }
    }

    function registerAccount() {
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const role = document.getElementById("role").value;

        // Basic validation, replace with actual registration logic
        if (password === confirmPassword) {
            alert("Account created successfully. Redirecting to Main Page...");
            // Redirect to main page or e-commerce website
            redirectToMainPage();
        } else {
            alert("Passwords do not match. Please try again.");
        }
    }

    function redirectToMainPage() {
        window.location.href = "index.html"; // Change to the appropriate main page or e-commerce website URL
    }

    // Attach event listeners
    document.getElementById("createAccountLink").addEventListener("click", showRegistrationForm);
    document.getElementById("backToLoginLink").addEventListener("click", showLoginForm);
    document.getElementById("loginButton").addEventListener("click", validateLogin);
    document.getElementById("registerButton").addEventListener("click", registerAccount);
});
