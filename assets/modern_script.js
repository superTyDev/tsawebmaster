window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementsByTagName("nav")[0];
var header = document.getElementsByTagName("header")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
function placeNav(event) {
	header.style.height = (parseInt(window.innerHeight) - parseInt(navbar.offsetHeight)).toString() + "px";
	console.log(header.style.height);
	// navbar.style.height = navbar.offsetHeight + "px";
	sticky = navbar.offsetTop;
}
placeNav();
window.addEventListener('resize', placeNav);



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

function responsiveNavbar() {
	[...document.getElementsByTagName("nav")].forEach((x) => {
		if (x.className === "nav") {
			x.className += " responsive";
		} else {
			x.className = "nav";
		}
	});
}