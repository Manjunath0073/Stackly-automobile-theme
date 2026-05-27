// =========================================
// SHOWCASE COUNTER ANIMATION
// =========================================

const counters =
    document.querySelectorAll(".counter");

// =========================================
// COUNTER FUNCTION
// =========================================

const startCounter = (counter) => {

    const target =
        +counter.getAttribute("data-target");

    const suffix =
        counter.getAttribute("data-suffix") || "";

    let count = 0;

    const speed = target / 120;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            // =================================
            // FORMAT LARGE NUMBERS
            // =================================

            if (target >= 1000) {

                counter.innerText =
                    Math.floor(count / 1000) + "K" + suffix;
            }

            else {

                counter.innerText =
                    Math.floor(count) + suffix;
            }

            requestAnimationFrame(updateCounter);
        }

        else {

            // ================================
            // FINAL VALUE
            // ================================

            if (target >= 1000) {

                counter.innerText =
                    Math.floor(target / 1000) + "K" + suffix;
            }

            else {

                counter.innerText =
                    target + suffix;
            }
        }
    };

    updateCounter();
};

// =========================================
// START COUNTERS
// =========================================

window.addEventListener("load", () => {

    counters.forEach(counter => {

        startCounter(counter);
    });
});

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

    // =====================================
    // TOGGLE INPUT TYPE
    // =====================================

    const isPassword =
        passwordInput.type === "password";

    passwordInput.type =
        isPassword ? "text" : "password";

    // =====================================
    // TOGGLE ICON
    // =====================================

    toggleIcon.classList.toggle(
        "ri-eye-line"
    );

    toggleIcon.classList.toggle(
        "ri-eye-off-line"
    );
});


// =========================================
// LOGIN FORM SUBMIT
// =========================================

const loginForm =
document.getElementById(
"loginForm"
);

loginForm.addEventListener(

"submit",

function(e){

e.preventDefault();

const email =
document.getElementById(
"email"
).value.trim();

const password =
document.getElementById(
"password"
).value.trim();

const selectedRole =
document.querySelector(
'input[name="role"]:checked'
);

// =========================================
// VALIDATION
// =========================================

if(!selectedRole){

alert(
"Please select a role"
);

return;
}

if(email===""){

alert(
"Email required"
);

return;
}

if(password===""){

alert(
"Password required"
);

return;
}

// =========================================
// GET USERNAME
// Example:
// john@gmail.com
// becomes
// john
// =========================================

const userName =
email.split("@")[0];

// =========================================
// STORE USER DATA
// =========================================

localStorage.setItem(
"userName",
userName
);

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userRole",
selectedRole.value
);

// =========================================
// REDIRECT
// =========================================

if(
selectedRole.value==="admin"
){

window.location.href =
"admin-dashboard.html";

}

else{

window.location.href =
"customer-dashboard.html";

}

});

