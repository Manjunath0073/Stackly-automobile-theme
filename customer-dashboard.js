
// =========================================
// GET USER DATA
// =========================================

const customerName =
document.getElementById(
"customerName"
);

const customerEmail =
document.getElementById(
"customerEmail"
);

const welcomeName =
document.getElementById(
"welcomeName"
);

const userName =
localStorage.getItem(
"userName"
) || "Customer";

const userEmail =
localStorage.getItem(
"userEmail"
) || "customer@gmail.com";


customerName.innerText =
userName;

customerEmail.innerText =
userEmail;

welcomeName.innerText =
userName;


// =========================================
// SIDEBAR MENU SWITCH
// =========================================

const menuItems =
document.querySelectorAll(
".customer-menu-item"
);

const sections =
document.querySelectorAll(
".customer-content"
);

menuItems.forEach(item=>{

item.addEventListener(

"click",

()=>{

// REMOVE OLD ACTIVE

menuItems.forEach(menu=>{

menu.classList.remove(
"active"
);

});

sections.forEach(section=>{

section.classList.remove(
"active"
);

});


// ADD ACTIVE

item.classList.add(
"active"
);

const tabName =
item.dataset.tab;

document
.getElementById(
tabName
)
.classList.add(
"active"
);


// CLOSE MOBILE MENU

if(
window.innerWidth<=768
){

sidebar.classList.remove(
"show"
);

}

});

});



// =========================================
// MOBILE SIDEBAR
// =========================================

const menuToggle =
document.querySelector(
".customer-menu-toggle"
);

const sidebar =
document.querySelector(
".customer-sidebar"
);

menuToggle.addEventListener(

"click",

()=>{

sidebar.classList.toggle(
"show"
);

}

);


// =========================================
// CLOSE SIDEBAR OUTSIDE CLICK
// =========================================

document.addEventListener(

"click",

function(e){

if(

window.innerWidth<=768 &&

!sidebar.contains(
e.target
)

&&

!menuToggle.contains(
e.target
)

){

sidebar.classList.remove(
"show"
);

}

});




// =========================================
// LOGOUT
// =========================================

document
.getElementById(
"customerLogout"
)
.addEventListener(

"click",

()=>{

localStorage.removeItem(
"userName"
);

localStorage.removeItem(
"userEmail"
);

localStorage.removeItem(
"userRole"
);

window.location.href=
"login.html";

}

);

// =========================================
// LOAD USER DETAILS
// =========================================

const storedUserName =
localStorage.getItem(
"userName"
);

const storedUserEmail =
localStorage.getItem(
"userEmail"
);

if(storedUserName){

document.getElementById(
"customerName"
).textContent =
storedUserName;

document.getElementById(
"welcomeName"
).textContent =
storedUserName;

const customerWelcome =
document.getElementById(
"customerWelcome"
);

if(customerWelcome){

customerWelcome.textContent =
`Welcome Back, ${storedUserName} 👋`;

}

}

if(storedUserEmail){

document.getElementById(
"customerEmail"
).textContent =
storedUserEmail;

}