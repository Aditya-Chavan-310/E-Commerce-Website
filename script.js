function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

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
