var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}
function showSlide(n){
	var i;
	var slides = document.getElementByClassName("work_slider_information");
	var links = document.getElementByClassName("nav-item-work");
	if(n > slides.length){slideIndex = 1}
	if(n < 1){slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i= 0; i < links.length; i++) {
		links[i].className = links[i].className.replace(" active", "")
	}
	slides[slideIndex-1].style.display = "block";
	links[slideIndex-1].className += " active"
}