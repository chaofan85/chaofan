$(document).ready(function() {
  var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  };

  message1 = "I am from China, came to New York City and studied at graduate school in 2014. I got my Master's Degree in Information Systems in 2016. ";
  message2 = "Now I am learning front-end web developement. I'm just a beginner now, but I really enjoy learning web design. I like something creative, and front-end web design allows me to use my creativity to work.";
  message3 = "I have never worked on any web development project yet, but I believe that after I learn more about web development, I will get opportunities to use my web design skills."

  setTimeout(function(){
    showText(".summary #p1", message1, 0, 35);
  }, 1000)


  setTimeout(function(){
    showText(".summary #p2", message2, 0, 25);
  }, 7000)


  setTimeout(function(){
    showText(".summary #p3", message3, 0, 30); 
  }, 14000)


  $('#summary').css({
    "letter-spacing":".3em",
    "text-shadow":"10px 10px 4px #B5B5B5"
  });


  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disEdu = $('#education').offset().top;
    var eduBtmDis = (windowScrollTop + windowHeight - disEdu);

    if (eduBtmDis > 180) {
      $('#education').css({
      "letter-spacing":".3em",
      "text-shadow":"10px 10px 4px #B5B5B5"});
    } else {
      $('#education').css({
      "letter-spacing":"normal",
      "text-shadow":"none"});
    }
  });

  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disContact = $('#contact').offset().top;
    var conBtmDis = (windowScrollTop + windowHeight - disContact);

    if (conBtmDis > 180) {
      $('#contact').css({
      "letter-spacing":".3em",
      "text-shadow":"10px 10px 4px #B5B5B5"});
    } else {
      $('#contact').css({
      "letter-spacing":"normal",
      "text-shadow":"none"});
    }
  });

  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disGa = $('#ga').offset().top;
    var gaBtmDis = (windowScrollTop + windowHeight - disGa);
    if (gaBtmDis > 200) {
      $('#ga').css("background-position", "55% 45%, 75% 45%, 95% 45%, 65% 85%, 85% 85%");
      $('#ga .firstLetter').css("color", "red");
  } else {
    $('#ga').css("background-position", "55% 80%, 75% 80%, 95% 80%, 65% 120%, 85% 120%");
    $('#ga .firstLetter').css("color", "orange");
    }
  });

  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disBaruch = $('#baruch').offset().top;
    var baBtmDis = (windowScrollTop + windowHeight - disBaruch);

    if (baBtmDis > 200) {
      $('#baruch').css("background-position", "65% 45%, 80% 45%, 95% 45%, 65% 85%, 80% 85%, 95% 85%");
      $('#baruch .firstLetter').css("color", "red");
    } else {
      $('#baruch').css("background-position", "65% 80%, 80% 80%, 95% 80%, 65% 120%, 80% 120%, 95% 120%");
      $('#baruch .firstLetter').css("color", "white");
      }
  });

  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disUibe = $('#uibe').offset().top;
    var uibeBtmDis = (windowScrollTop + windowHeight - disUibe);

    if (uibeBtmDis > 200) {
      $('#uibe').css("background-position", "65% 50%, 80% 50%, 95% 50%, 73% 95%, 87% 95%");
      $('#uibe .firstLetter').css("color", "red");
  } else {
    $('#uibe').css("background-position", "65% 85%, 80% 85%, 95% 85%, 73% 120%, 87% 120%");
    $('#uibe .firstLetter').css("color", "white");
  }
  });

  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disEmail = $('#email').offset().top;
    var emailBtmDis = (windowScrollTop + windowHeight - disEmail);

    if (emailBtmDis > 100) {
      $('.contact').css("background-position", "35% 250px");
      $('#email').css("left", "45%");
  } else {
    $('.contact').css("background-position", "20% 250px");
    $('#email').css("left", "60%");
  }
  });

  $(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var disIcons = $('#contactIcons').offset().top;
    var iconsBtmDis = (windowScrollTop + windowHeight - disIcons);

    if (iconsBtmDis > 10) {
      $('#contactIcons').css({
        "top":"70px",
        "opacity":"1"
      });
      $('.contact').css("height","570px");
  } else {
    $('#contactIcons').css({
        "top":"200px",
        "opacity":"0"
      });
      $('.contact').css("height","700px");
  }
  });

})