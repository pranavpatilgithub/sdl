function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const conPassword = document.getElementById("confirm-password").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        alert("Please enter your name properly.");
        isValid = false;
    }

    if (address === "") {
        alert("Please enter your address.");
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        alert("Please enter a password with at least 6 characters.");
        isValid = false;
    } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/.test(password)) {
        alert("Password must contain at least one capital letter, one special character, and one digit.");
        isValid = false;
    }

    if (password !== conPassword) {
        alert("Passwords do not match.");
        isValid = false;
    }

    if (mobileNumber === "" || !/\d{10}/.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        isValid = false;
    }

    return isValid;
}
