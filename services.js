// =========================================
// FEATURED SERVICE SCROLL ANIMATION
// =========================================

const featuredCards =
    document.querySelectorAll(
        ".auto-featured-service-card"
    );

const featuredObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");
                }
            });
        },

        {
            threshold: 0.2
        }
    );

featuredCards.forEach((card) => {

    featuredObserver.observe(card);
});

// =========================================
// PROCESS STEP SCROLL ANIMATION
// =========================================

const processSteps =
    document.querySelectorAll(
        ".auto-process-step"
    );

const processObserver =
    new IntersectionObserver(

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

processSteps.forEach((step) => {

    processObserver.observe(step);
});