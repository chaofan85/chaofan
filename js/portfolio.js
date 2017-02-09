$(document).ready(function() {
  $('#portfolioMsg').css("color", "#424242");

  $(function() {
    var $all_msg = $('#portfolioMsg');
    var $wordList = $('#portfolioMsg').html().split("");
    $('#portfolioMsg').html("");
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
        if (tagGoing != "") {
          tagGoing += elem;
        } else {

          var newEL = $("<span/>").text(elem).css({
            opacity: 0
          });
          newEL.appendTo($all_msg);
          newEL.delay(idx * 50);
          newEL.animate({
            opacity: 1
          }, 600);
        }
      }
    });
  });
})