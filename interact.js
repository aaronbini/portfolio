$(function(){
  $('.hamburger').on('click', function(){
    $('nav').toggle();
  });

  $('#aboutNav').on('click', function(){
    $('#aboutContact').toggle(700);
  });

  $('.navigate').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#showAll').fadeIn(700);
    $('#' + $(this).data('content')).fadeIn(700);
  });

  $('#showAll').on('click', function () {
    $('.tab-content').fadeIn(700);
    $('#showAll').fadeOut(700);
  });

});
