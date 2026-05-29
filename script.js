// =========================================
// SERVICE CARD REVEAL
// =========================================

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 180);
            }
        });
    },

    {
        threshold: 0.2
    }
);

serviceCards.forEach(card => {
    serviceObserver.observe(card);
});


// =========================================
// ABOUT SECTION REVEAL
// =========================================

const aboutElements = document.querySelectorAll(
    ".about-images, .about-content"
);

const aboutObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });
    },

    {
        threshold: 0.2
    }
);

aboutElements.forEach(element => {
    aboutObserver.observe(element);
});

// =========================================
// STATS COUNTER ANIMATION
// =========================================

const counters = document.querySelectorAll(".counter");
const statCards = document.querySelectorAll(".stat-card");

const speed = 200;

// =========================================
// COUNTER FUNCTION
// =========================================

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const increment = target / speed;

    const updateCounter = () => {

        count += increment;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(updateCounter);
        }

        else {

            counter.innerText = target;
        }
    };

    updateCounter();
};

// =========================================
// INTERSECTION OBSERVER
// =========================================

const statsObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 180);

                const counter =
                    entry.target.querySelector(".counter");

                if (counter && !counter.classList.contains("counted")) {

                    startCounter(counter);

                    counter.classList.add("counted");
                }
            }
        });
    },

    {
        threshold: 0.3
    }
);

// =========================================
// OBSERVE CARDS
// =========================================

statCards.forEach(card => {
    statsObserver.observe(card);
});

// =========================================
// CONTACT SECTION REVEAL
// =========================================

const contactElements = document.querySelectorAll(
    ".contact-info, .contact-form-card"
);

const contactObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });
    },

    {
        threshold: 0.2
    }
);

contactElements.forEach(element => {
    contactObserver.observe(element);
});

// =========================================
// FORM VALIDATION
// =========================================

const bookingForm =
    document.getElementById("bookingForm");

const submitBtn =
    document.querySelector(".submit-btn");

if (bookingForm && submitBtn) {
    bookingForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const vehicle =
            document.getElementById("vehicle").value.trim();

        const service =
            document.getElementById("service").value.trim();

        const message =
            document.getElementById("message").value.trim();

        // =====================================
        // VALIDATION
        // =====================================

        if (
            name === "" ||
            email === "" ||
            vehicle === "" ||
            service === "" ||
            message === ""
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
        // BUTTON LOADING
        // =====================================

        submitBtn.classList.add("loading");

        // =====================================
        // REDIRECT
        // =====================================

        setTimeout(() => {

            window.location.href =
                "thankyou.html";

        }, 1800);
    });
}




// =========================================
// MOBILE MENU
// =========================================

const menuToggle =
document.querySelector(
".menu-toggle"
);

const navLinks =
document.querySelector(
".nav-links"
);

if(menuToggle && navLinks){

menuToggle.addEventListener(

"click",

()=>{

menuToggle.classList.toggle(
"active"
);

navLinks.classList.toggle(
"active"
);

});


// =========================================
// CLOSE MENU WHEN LINK CLICKED
// =========================================

document
.querySelectorAll(
".nav-links a"
)
.forEach(link=>{

link.addEventListener(

"click",

()=>{

menuToggle.classList.remove(
"active"
);

navLinks.classList.remove(
"active"
);

});

});

}


// =========================================
// ACTIVE NAVIGATION
// =========================================

const currentPage =
window.location.pathname
.split("/")
.pop() || "index.html";

const navLinksActive =
document.querySelectorAll(
".nav-link"
);

navLinksActive.forEach(link=>{

const href =
link.getAttribute("href");

if(href === currentPage){

link.classList.add(
"active"
);

}

});

