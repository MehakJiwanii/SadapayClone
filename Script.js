window.onscroll = function() {
    changeNavbarColor();
};

function changeNavbarColor() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#555"; // Change the color as needed
    } else {
        navbar.style.backgroundColor = "#333"; // Change the color as needed
    }
}
