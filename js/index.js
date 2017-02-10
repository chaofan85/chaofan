$(document).ready(function() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
      window.location.replace("html/home.html");
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
      window.location.replace("html/home.html");
  }


  $('#welcome_msg').css("color", "#424242");
  $('footer').hide();

  // I found out the solution at here:
  // http://stackoverflow.com/questions/30832400/fade-in-letter-by-letter-with-jquery
  // Thanks, Banana!

  $(function() {
    var $all_msg = $('#welcome_msg');
    var $wordList = $('#welcome_msg').html().split("");
    $('#welcome_msg').html("");
    var tagGoing = "";
    $.each($wordList, function(idx, elem) {

      if (elem == "<") {
        tagGoing += elem;
      } else if (elem == ">") {
        tagGoing += elem;
        var $foundTag = $(tagGoing).appendTo($all_msg);
        $foundTag.css({
          opacity: 0
        });
        $foundTag.delay(idx * 60);
        $foundTag.animate({
          opacity: 1
        }, 800);
        tagGoing = "";
      } else {
        if (tagGoing !== "") {
          tagGoing += elem;
        } else {

          var newEL = $("<span/>").text(elem).css({
            opacity: 0
          });
          newEL.appendTo($all_msg);
          newEL.delay(idx * 70);
          newEL.animate({
            opacity: 1
          }, 1000);
        }
      }
    });
  });


  var pic = "images/superhero.png";
  var pic2 = "images/stairs.png";
  var pic3 = "images/mark.png";

  setTimeout(function() {
    $(".bgimage").hide();
    $('.bgimage').css({
        "background-image":'url(' + pic +')',
        "background-position":"80% 60%",
        "background-size":"300px"
      });
    $(".bgimage").css("background-image", 'url(' + pic +')').fadeIn(1000);
  }, 8500);

  setTimeout(function() {
    $('.bgimage').css({
        "-webkit-transition":"2s",
        "-moz-transition":"2s",
        "transition":"2s",
        "background-position":"22% 90%",
        "background-size":"50px"
        });
  }, 12000);

  setTimeout(function() {
    $('.bgimage').css({
        "-webkit-transition":"0.01s",
        "-moz-transition":"0.01s",
        "transition":"0.01s",
        });
  }, 13900);

  setTimeout(function() {
    $('.bgimage').css({
        "background-image":'url(' + pic +'), url(' + pic2 + '), url(' + pic3 + ')',
        "background-position":"22% 95%, 50% 105%, 23.2% 85%",
        "background-size":"50px, 60%, 50px"
        });
  }, 14000);

  setTimeout (function() {
    $('#homeHeader').css("top", "0").fadeIn(5000);
    $('footer').fadeIn("slow");
  }, 15000);

  setTimeout (function() {
    $('#homeHeader').css("box-shadow", "0 8px 5px #4D4D4D").fadeIn(5000);
  }, 21000);


})