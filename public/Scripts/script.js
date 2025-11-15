const form = document.querySelector("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    if (username.value.trim() === "") {
        alert("Please enter your name.");
        e.preventDefault();
        return;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email.");
        e.preventDefault();
        return;
    }

    if (password.value.length < 8 || password.value.length > 30) {
        alert("Password must be between 8 and 30 characters.");
        e.preventDefault();
        return;
    }

    if (message.value.trim() === "") {
        alert("Please enter your message.");
        e.preventDefault();
        return;
    }
});
