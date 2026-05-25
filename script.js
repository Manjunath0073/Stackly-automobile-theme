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

                if (!counter.classList.contains("counted")) {

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