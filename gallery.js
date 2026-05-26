// =========================================
// GALLERY FILTER ACTIVE BUTTON
// =========================================

const galleryFilterButtons =
    document.querySelectorAll(
        ".auto-gallery-filter-btn"
    );

// =========================================
// BUTTON CLICK
// =========================================

galleryFilterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE

        galleryFilterButtons.forEach((btn) => {

            btn.classList.remove("active");
        });

        // ADD ACTIVE

        button.classList.add("active");
    });
});

// =========================================
// GALLERY SHOWCASE ANIMATION
// =========================================

const galleryItems =
    document.querySelectorAll(
        ".auto-gallery-item"
    );

const galleryObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, index * 120);
                }
            });
        },

        {
            threshold: 0.15
        }
    );

galleryItems.forEach((item) => {

    galleryObserver.observe(item);
});

// =========================================
// BEFORE AFTER SCROLL ANIMATION
// =========================================

const beforeAfterCards =
    document.querySelectorAll(
        ".auto-before-card, .auto-after-card"
    );

const beforeAfterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, index * 250);
                }
            });
        },

        {
            threshold: 0.2
        }
    );

beforeAfterCards.forEach((card) => {

    beforeAfterObserver.observe(card);
});

// =========================================
// PREMIUM SHOWCASE SCROLL ANIMATION
// =========================================

const premiumContent =
    document.querySelector(
        ".auto-premium-showcase-content"
    );

const premiumImages =
    document.querySelector(
        ".auto-premium-showcase-images"
    );

const premiumObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    premiumContent.classList.add("show");

                    setTimeout(() => {

                        premiumImages.classList.add("show");

                    }, 250);
                }
            });
        },

        {
            threshold: 0.2
        }
    );

premiumObserver.observe(
    document.querySelector(
        ".auto-premium-showcase"
    )
);

// =========================================
// TESTIMONIAL CARD ANIMATION
// =========================================

const testimonialCards =
    document.querySelectorAll(
        ".auto-gallery-testimonial-card"
    );

const testimonialObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, index * 220);
                }
            });
        },

        {
            threshold: 0.2
        }
    );

testimonialCards.forEach((card) => {

    testimonialObserver.observe(card);
});

// =========================================
// CTA SCROLL REVEAL
// =========================================

const ctaCard =
    document.querySelector(
        ".auto-gallery-cta-card"
    );

const ctaObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");
                }
            });
        },

        {
            threshold: 0.25
        }
    );

ctaObserver.observe(ctaCard);