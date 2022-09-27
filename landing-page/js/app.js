// noinspection HtmlUnknownAnchorTarget
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = Array.from(document.querySelectorAll('section'));
const navBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const createNavItems = () => {
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navBar.insertAdjacentHTML("beforeend", listItem);
    });
};
createNavItems();
// Add class 'active' to section when near top of viewport
const dropDown = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color:#245b84 ;";
    };
};

//implementating the actual function

const activeSection = () => {
    sections.forEach(section => {
        const sectiondropDown = dropDown(section);

        inview = () => sectiondropDown < 160 && sectiondropDown >= -160;

        removeActive(section);
        addActive(inview(),section);
    });
};

window.addEventListener('scroll' ,activeSection);

// Scroll to anchor ID using scrollTO event

window.scroll(function() {
    let scroll_top=$(window).scrollTop()
    if(scroll_top > 100){
        $('header').addClass("navbar_fix")
    }
    else{
        $('header').removeClass("navbar_fix")
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active



