//jQuery functions for basic page interaction
//could make these named functions at some point
$(function(){
  $('.hamburger').on('click', function(){
    $('.hamburger').toggle(500);
    // $('.hamburger-x').toggle(700);
    $('.navigate').toggle(700);
  });

  $('#aboutNav').on('click', function(){
    $('#aboutContact').toggle(700);
  });

  $('#homeNav').on('click', function(){
    $('.tab-content').fadeIn(700);
    $('#showAll').fadeOut(700);
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

// (function(module){
var pageView = {};
//add favorites on to page
pageView.populateFilter = function () {
  $('.favorites').each(function(){
    var val = $(this).data('category');
    var option = '<option value="' + val + '">' + val + '</option>';
    if ($('#favorites-filter option[value="' + val + '"]').length === 0) {
      $('#favorites-filter').append(option);
    }
  });
};

pageView.handleFavoriteFilter = function () {
  $('#favorites-filter').on('change', function () {
    var val = $(this).val();
    if (val) {
      $('.favorites').hide();
      $('.favorites[data-category="' + val + '"]').fadeIn(700);
    } else {
      $('.favorites').fadeIn(700);
    }
  });
};

pageView.indexPageLoad = function () {
  Project.all.forEach(function(element){
    var elToAppend = element.createHTML();
    $('#projects').append(elToAppend);
  });
  Favorite.all.forEach(function(element){
    var elToAppend = element.toHTML();
    $('#interests').append(elToAppend);
    $('#interests').children(':not(h2, select)').hide();
  });
  pageView.populateFilter();
  pageView.handleFavoriteFilter();
};

//   module.pageView = pageView;
// })(window);
