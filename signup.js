// =========================================
// PASSWORD TOGGLE
// =========================================

const togglePassword =
    document.querySelector(".toggle-password");

const passwordInput =
    document.getElementById("password");

const toggleIcon =
    togglePassword.querySelector("i");

togglePassword.addEventListener("click", () => {

    const isPassword =
        passwordInput.type === "password";

    passwordInput.type =
        isPassword ? "text" : "password";

    toggleIcon.classList.toggle(
        "ri-eye-line"
    );

    toggleIcon.classList.toggle(
        "ri-eye-off-line"
    );
});

// =========================================
// SIGNUP VALIDATION
// =========================================

const signupForm =
    document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const role =
        document.querySelector(
            'input[name="role"]:checked'
        );

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword")
        .value.trim();

    const terms =
        document.getElementById("terms");

    // =====================================
    // VALIDATION
    // =====================================

    if (!role) {

        alert("Please select a role.");

        return;
    }

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all fields.");

        return;
    }

    // =====================================
    // EMAIL VALIDATION
    // =====================================

    const emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Please enter a valid email.");

        return;
    }

    // =====================================
    // PASSWORD LENGTH
    // =====================================

    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }

    // =====================================
    // PASSWORD MATCH
    // =====================================

        if (
        password !== confirmPassword
    ) {

        confirmPasswordInput.focus();

        return;
    }

    // =====================================
    // TERMS
    // =====================================

    if (!terms.checked) {

        alert(
            "Please accept terms & conditions."
        );

        return;
    }

    // =====================================
    // REDIRECT
    // =====================================

    if (role.value === "admin") {

        window.location.href =
            "admin-dashboard.html";
    }

    else {

        window.location.href =
            "customer-dashboard.html";
    }
});



// =========================================
// LIVE PASSWORD MATCH CHECK
// =========================================

const confirmPasswordInput =
    document.getElementById("confirmPassword");

const passwordMessage =
    document.querySelector(".password-message");

// =========================================
// CHECK PASSWORDS
// =========================================

const checkPasswords = () => {

    const password =
        passwordInput.value.trim();

    const confirmPassword =
        confirmPasswordInput.value.trim();

    // =====================================
    // EMPTY
    // =====================================

    if (confirmPassword === "") {

        passwordMessage.textContent = "";

        confirmPasswordInput.classList.remove(
            "invalid",
            "valid"
        );

        return;
    }

    // =====================================
    // MATCH
    // =====================================

    if (password === confirmPassword) {

        passwordMessage.textContent =
            "Passwords match";

        passwordMessage.classList.add("success");

        passwordMessage.classList.remove("error");

        confirmPasswordInput.classList.add("valid");

        confirmPasswordInput.classList.remove(
            "invalid"
        );
    }

    // =====================================
    // NOT MATCH
    // =====================================

    else {

        passwordMessage.textContent =
            "Passwords do not match";

        passwordMessage.classList.add("error");

        passwordMessage.classList.remove("success");

        confirmPasswordInput.classList.add(
            "invalid"
        );

        confirmPasswordInput.classList.remove(
            "valid"
        );
    }
};

// =========================================
// EVENTS
// =========================================

passwordInput.addEventListener(
    "input",
    checkPasswords
);

confirmPasswordInput.addEventListener(
    "input",
    checkPasswords
);

// RESET FORM ON PAGE LOAD

window.addEventListener("pageshow", () => {

const form =
document.getElementById(
"signupForm"
);

if(form){

form.reset();

}

});