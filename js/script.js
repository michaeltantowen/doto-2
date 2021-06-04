// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
	var slides = document.getElementsByClassName("slide-img");
	var indicator = document.getElementsByClassName("indicator");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (var i = 0; i < indicator.length; i++) {
		indicator[i].className = indicator[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	indicator[slideIndex - 1].className += " active-indicator";
	setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// End Slideshow