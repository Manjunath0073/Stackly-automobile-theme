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