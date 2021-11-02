// Write scroll position to <html> for shadow on scroll
// Gets original position and triggers on page scroll
document.documentElement.dataset.scroll = window.scrollY;
document.addEventListener("scroll", () => {
	document.documentElement.dataset.scroll = window.scrollY;
});

// Coverts the nav bar to responsive
function responsiveNavbar() {
	[...document.getElementsByTagName("nav")].forEach((x) => {
		if (x.className === "nav") {
			x.className += " responsive";
		} else {
			x.className = "nav";
		}
	});
}

var slideIndex = 1;
var slideInterval = setInterval(function () {
	plusSlides(1);
}, 10000);
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
	clearInterval(slideInterval);
	slideInterval = setInterval(function () {
		plusSlides(1);
	}, 10000);
}

var p = $('.parallax p');
console.log(p)
var animator = $('<span class="anim_show"></span>');
var hidden = $('<span class="hid"></span>')
var textLength = p.text().length;
var offset = 0;

function animate(letter_position) {
  var text = p.text();
  p.text('');
  var textBefore = text.substring(0, letter_position - 1);
  var textAfter = text.substring(letter_position, textLength);
  var letter = text.substr(letter_position - 1, 1);
  animator.text(letter);
  hidden.text(textAfter);
  p.append(textBefore);
  p.append(animator);
  p.append(hidden);
}

var interval = setInterval(function() {
  if (p.hasClass('hid')) p.removeClass('hid');
  if (offset - 2 === textLength) {
    clearInterval(interval);
    p.children('.anim').remove();
    p.children('.hid').remove();
    return;
  }
  animate(offset);
  offset++;
}, 100);


