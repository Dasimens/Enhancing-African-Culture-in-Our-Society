// Function if page is scrolled and adjust the logo size
function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPostion = window.scrollY;
    console.log(scrollPostion);

    //Add/remove 'scrolled' class based on scroll position
    if(scrollPostion > 20) {
        navbar.classList.add('scrolled');
    }else {
navbar.classList.remove('scrolled');
    }
    
    //calculate the new font size based on scroll position
    let newSize = 3 - (scrollPostion * 0.03); // decrease by 0.03rem for every 1px scrolled

    // clamping the font size btw 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

// Event Listener for scroll event
window.addEventListener('scroll',checkScroll);


