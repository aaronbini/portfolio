$(function(){
  $('.hamburger').on('click', function(){
    $('nav').toggle();
  });

  $('#aboutNav').on('click', function(){
    $('#aboutContact').toggle(700);
  });

  $('.navigate').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(700);
  });
});
