$(".button-collapse").sideNav();
$(".slider").slider();
$('.parallax').parallax();
$('.carousel').carousel();
$('.modal').modal();
$('.tooltipped').tooltip({delay: 50});

$('#about').css('margin-top', $('.slider').height() - $('.nav').height());

$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    $(".button-collapse").sideNav('hide');
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - $('.nav').height()
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

$(function() {
  var colored = false;

  if($(window).scrollTop() >= $('.slider').height() - 65) {
    colored = true;
    $("nav").css('backgroundColor', 'rgba(255,0,0,1) !important');
  }


  if($(window).scrollTop() <= $('.slider').height() - 65) {
    colored = false;
    $("nav").css('backgroundColor', 'rgba(0,0,0,0.6) !important');
  }

  $(document).scroll(function() {

    if(($(window).scrollTop() >= $('.slider').height() - 65) && colored == false) {
      colored = true;
      $("nav").stop().animate({backgroundColor: 'rgba(255,0,0,1) !important'}, 550);
    }

    if(($(window).scrollTop() <= $('.slider').height() - 66) && colored == true) {
      colored = false;
      $("nav").stop().animate({backgroundColor: 'rgba(0,0,0,0.6) !important'}, 550);
    }
  });
});


$(function() {
  var visible = false;

  if($(window).scrollTop() < $('.nav').height()) {
    $(".fixed-action-btn").addClass('scale-out');
    visible = false;
  } else {
    $(".fixed-action-btn").addClass('scale-in');
    visible = true;
  }
  $(document).scroll(function() {
    if($(window).scrollTop() < $('.nav').height() && visible != false) {
      visible = false;
      $(".fixed-action-btn").removeClass('scale-in');
      $(".fixed-action-btn").addClass('scale-out');
    }
    if($(window).scrollTop() > $('.nav').height() && visible != true) {
      visible = true;
      $(".fixed-action-btn").removeClass('scale-out');
      $(".fixed-action-btn").addClass('scale-in');
    }
  });
});



$(function() {
  if(($(window).scrollTop() >= 0) && ($(window).scrollTop() <= $('.slider').height() - 70)) {
    $('#navhome').addClass('active');
  } else {
    $('#navhome').removeClass('active');
  }

  if(($(window).scrollTop() >= $('.slider').height() - 70) && ($(window).scrollTop() <= $('#power').position().top - 70)) {
    $('#navabout').addClass('active');
  } else {
    $('#navabout').removeClass('active');
  }

  if(($(window).scrollTop() >= $('#power').position().top - 70) && ($(window).scrollTop() <= $('#referee').position().top - 70)) {
    $('#navpower').addClass('active');
  } else {
    $('#navpower').removeClass('active');
  }

  if(($(window).scrollTop() >= $('#referee').position().top - 70) && ($(window).scrollTop() <= $('#contact').position().top - 70)) {
    $('#navreferee').addClass('active');
  } else {
    $('#navreferee').removeClass('active');
  }

  if(($(window).scrollTop() >= $('#contact').position().top - 70)) {
    $('#navcontact').addClass('active');
  } else {
    $('#navcontact').removeClass('active');
  }

  $(document).scroll(function() {
    if(($(window).scrollTop() >= 0) && ($(window).scrollTop() <= $('.slider').height() - 70)) {
      $('#navhome').addClass('active');
    } else {
      $('#navhome').removeClass('active');
    }

    if(($(window).scrollTop() >= $('.slider').height() - 70) && ($(window).scrollTop() <= $('#power').position().top - 70)) {
      $('#navabout').addClass('active');
    } else {
      $('#navabout').removeClass('active');
    }

    if(($(window).scrollTop() >= $('#power').position().top - 70) && ($(window).scrollTop() <= $('#referee').position().top - 70)) {
      $('#navpower').addClass('active');
    } else {
      $('#navpower').removeClass('active');
    }

    if(($(window).scrollTop() >= $('#referee').position().top - 70) && ($(window).scrollTop() <= $('#contact').position().top - 70)) {
      $('#navreferee').addClass('active');
    } else {
      $('#navreferee').removeClass('active');
    }

    if(($(window).scrollTop() >= $('#contact').position().top - 70)) {
      $('#navcontact').addClass('active');
    } else {
      $('#navcontact').removeClass('active');
    }
  });
});
