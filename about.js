// =========================================
// ABOUT STORY ANIMATION
// =========================================

const aboutStoryObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

document
.querySelector(
".auto-about-story-images"
)
.classList.add("show");

setTimeout(()=>{

document
.querySelector(
".auto-about-story-content"
)
.classList.add("show");

},300);

}

});

},

{
threshold:.2
}

);

aboutStoryObserver.observe(
document.querySelector(
".auto-about-story"
)
);

// =========================================
// VALUES CARD REVEAL
// =========================================

const valueCards =
document.querySelectorAll(
".auto-about-value-card"
);

const valueObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add(
"show"
);

},index*200);

}

});

},

{
threshold:.2
}

);

valueCards.forEach(card=>{

valueObserver.observe(card);

});

// =========================================
// TEAM CARD ANIMATION
// =========================================

const teamCards=
document.querySelectorAll(
".auto-about-team-card"
);

const teamObserver=
new IntersectionObserver(

(entries)=>{

entries.forEach(
(entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add(
"show"
);

},index*200);

}

});

},

{
threshold:.2
}

);

teamCards.forEach(card=>{

teamObserver.observe(card);

});

// =========================================
// ACHIEVEMENT COUNTER
// =========================================

const achievementNumbers =
document.querySelectorAll(
".auto-about-achievement-card h3"
);

achievementNumbers.forEach(counter=>{

const target=
counter.innerText;

const number=
parseFloat(
target.replace(/[^\d.]/g,'')
);

const suffix=
target.replace(/[\d.]/g,'');

let start=0;

const update=()=>{

start+=number/40;

if(start<number){

counter.innerText=
Math.floor(start)+suffix;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});