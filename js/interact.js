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

  $('#visitorStats').on('click', function(){
    $(this).hide();
    $('#treehouseRoute').hide();
    $('#treehouseStats').find('label').hide();
    $('#visitorGo').fadeIn(700);
    $('#visitorGo').attr('href', 'http://teamtreehouse.com/' + $('#treehouseRoute').val() + '.json');
  });

  $('#visitorGo').on('click', function(){
    $(this).hide();
    $('#visitorGo').hide();
    $('#visitorStats').fadeIn(700);
    $('#treehouseRoute').val('').fadeIn(700);
    $('#treehouseStats').find('label').fadeIn(700);
    // $('#treehouseRoute').val('');
  });
});

(function(module){
  //empty object to hold functions related to page view
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
  //handle event when filter category is selected
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
      $('#projects').append(element.createHTML());
    });
    Favorite.all.forEach(function(element){
      $('#interests').append(element.toHTML());
      $('#interests').children(':not(h2, select)').hide();
    });
    pageView.populateFilter();
    pageView.handleFavoriteFilter();
  };

  module.pageView = pageView;
})(window);
