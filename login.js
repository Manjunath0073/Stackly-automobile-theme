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

// RESET FORM ON PAGE LOAD

window.addEventListener("pageshow", () => {

const form =
document.getElementById(
"loginForm"
);

if(form){

form.reset();

}

});

