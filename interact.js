$(function(){
  $('.hamburger').on('click', function(){
    $('nav').toggle();
  });
  $('#aboutNav').on('click', function(){
    console.log('toggle the about');
    $('#about').toggle(700);
    $('#contact').toggle(700);
  });
});
