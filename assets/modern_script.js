// Get the navbar
var navbar = document.getElementsByTagName("nav")[0];
var header = document.getElementsByTagName("header")[0];
var sticky = navbar.offsetTop;

window.onscroll = function () {
	stickyNav();
};
window.addEventListener("resize", placeNav);
window.onload = setTimeout(placeNav, 100);

// Get the offset position of the navbar
function placeNav(event) {
	header.style.height =
		(parseInt(window.innerHeight) - parseInt(navbar.offsetHeight)).toString() +
		"px";
	sticky = navbar.offsetTop;
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

	if (window.pageYOffset <= 200) {
		navbar.classList.add("reverse");
	} else {
		navbar.classList.remove("reverse");
	}
}

function responsiveNavbar() {
	if (navbar.classList.contains("responsive")) {
		navbar.classList.remove("responsive");
	} else {
		navbar.classList.add("responsive");
	}
}
