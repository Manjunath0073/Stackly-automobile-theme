
// =========================================
// GET USER DATA FROM LOGIN
// =========================================

const adminName =
document.getElementById(
"adminName"
);

const adminEmail =
document.getElementById(
"adminEmail"
);

adminName.innerText =
localStorage.getItem(
"userName"
)
|| "Admin";

adminEmail.innerText =
localStorage.getItem(
"userEmail"
)
|| "admin@gmail.com";



// =========================================
// SIDEBAR MENU SWITCH
// =========================================

const menuItems =
document.querySelectorAll(
".menu-item"
);

const sections =
document.querySelectorAll(
".content-section"
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

// ADD NEW ACTIVE

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


// CLOSE MOBILE SIDEBAR

if(
window.innerWidth <=768
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

const menuButton =
document.querySelector(
".menu-toggle"
);

const sidebar =
document.querySelector(
".admin-sidebar"
);

menuButton.addEventListener(

"click",

()=>{

sidebar.classList.toggle(
"show"
);

}

);



// =========================================
// CLOSE SIDEBAR ON OUTSIDE CLICK
// =========================================

document.addEventListener(

"click",

function(e){

if(

window.innerWidth <=768 &&

!sidebar.contains(
e.target
)

&&

!menuButton.contains(
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
"logoutBtn"
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

