// =========================================
// CONTACT INFO REVEAL
// =========================================

const contactCards =
document.querySelectorAll(
".auto-contact-info-card"
);

const contactPageObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(
(entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add(
"show"
);

},index*180);

}

});

},

{
threshold:.2
}

);

contactCards.forEach(card=>{

contactPageObserver.observe(card);

});


// =========================================
// CONTACT FORM VALIDATION
// =========================================

const contactForm =
document.querySelector(
".auto-contact-form-card form"
);

if(contactForm){

    contactForm.addEventListener(
    "submit",

    function(e){

        e.preventDefault();

        const fields =
        contactForm.querySelectorAll(
        "input,textarea,select"
        );

        let valid = true;

        fields.forEach(field=>{

            if(field.value.trim()===""){

                field.style.borderColor =
                "#ff6767";

                valid = false;

            }else{

                field.style.borderColor =
                "rgba(212,175,55,.3)";
            }

        });

        if(valid){

            const successMessage =
            document.getElementById(
            "successMessage"
            );

            successMessage.style.display =
            "block";

            contactForm.reset();

            setTimeout(()=>{

                successMessage.style.display =
                "none";

            },3000);

        }

    });

}

// =========================================
// CTA REVEAL
// =========================================

const contactCTA =
document.querySelector(
".auto-contact-cta-card"
);

const ctaObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:.25
}

);

if(contactCTA){
ctaObserver.observe(
contactCTA
);
}