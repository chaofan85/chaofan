$('li, .albumNav li').hover(function() {
	$(this).children().css("color", "white").fadeIn(2000);},
	function() {$(this).children().css("color", "black").fadeIn(2000);}
);
