/* var slideTotal = 8;
var slideWidth = $('.slideShow').width();

function slideLeft(slideShow){
	var offsetCurrent = slideShow.css("left");
	var offset = 0;
} */

var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(i){
	showSlide(slideIndex += i);
}

function showSlide(i){
	var j;
	var slides = document.getElementsByClassName("slide");
	if( i > slides.length ){
		slideIndex = 1;
	}
	if( i < 1 ){
		slideIndex = slides.length;
	}

	for ( j = 0; j < slides.length; j++ ){
		slides[j].style.display = "none";
	}
	
	console.log( slideIndex );
	slides[slideIndex-1].style.display = "block";
	
	//setTimeout( showSlide, 2000 );
}

$(document).ready(function() {
	$("#button1, #button5").click(function() {
		$('html,body').animate({scrollTop: $("#game-projects").offset().top -130}, 'slow');
		//console.log("Width of img: " + $('.slideShow').width());
	});
	
	$("#button2, #button6").click(function() {
		$('html,body').animate({scrollTop: $("#graphics-projects").offset().top -120}, 'slow');
	});
	
	$("#button3, #button7").click(function() {
		$('html,body').animate({scrollTop: $("#animation-projects").offset().top -120}, 'slow');
	});
	
	$("#button4, #button8").click(function() {
		$('html,body').animate({scrollTop: $("#about-me").offset().top -120}, 'slow');
	});
});