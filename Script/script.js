$(document).ready(function(){
var quote;
var author;

function getNewQuote(){
	$.ajax({
		 url: "http://api.forismatic.com/api/1.0/",
		 jsonp: 'jsonp',
		 dataType: 'jsonp',
		 data: {
		 	method: 'getQuote',
		 	format: 'jsonp',
		 	lang: 'en'
		 },
		 success: function(response){
		 	quote = response.quoteText;
		 	author = response.quoteAuthor;
		 	$('#quote').text(quote);
		 	if (author) {
		 		$('#author').text("-- " + author);
		 	}
		 	else{
		 		$('#author').text("-- Unknown");
		 	}
		 }
	});
}

function changeColor(){
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);

	var randomRGBA = 'rgba('+ red + ', ' + green + ', ' + blue +', 1)';

$(function(){
	$('body').hide().fadeIn(1500);
	$('body').css("background", randomRGBA);
});

}

getNewQuote();
// changeColor();

$('#getQuote').on('click', function(
	event){
	event.preventDefault();
	getNewQuote();
	changeColor();
});

$('#share').on('click', function(){
	event.preventDefault();
	window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " --" +author));
});
});
