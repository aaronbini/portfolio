function setRouteMapping() {

  page.base('/');

  page('', pageController.homeDisplay);
  page('projects', pageController.projectsDisplay);
  page('interests', pageController.interestsDisplay);
  page('hobbies', pageController.hobbiesDisplay);
  page('treehouse', pageController.treehouseDisplay);
  page('gitstats', pageController.gitstatsDisplay);
  page('gitstats/:filter', repos.stickOnRecent, pageController.gitstatsDisplay);
  page('*', pageController.pageNotFound);
  page();
}

(function(module) {
  var pageController = {};

  var $projects = $('#projects');
  var $hobbies = $('#hobbies');
  var $interests = $('#interests');
  var $treehouse = $('#treehouse');
  var $gitstats = $('#gitstats');

  function showThisSection (element) {
    $('.tab-content').hide();
    element.fadeIn(700);
  }

  pageController.homeDisplay = function() {
    $('#showAll').hide();
    $('.tab-content').fadeIn(700);
  };

  pageController.projectsDisplay = function () {
    showThisSection($projects);
    console.log('projects');
  };

  pageController.interestsDisplay = function () {
    showThisSection($interests);
  };

  pageController.hobbiesDisplay = function() {
    showThisSection($hobbies);
  };

  pageController.treehouseDisplay = function() {
    showThisSection($treehouse);
  };

  pageController.gitstatsDisplay = function () {
    showThisSection($gitstats);
  };

  pageController.pageNotFound = function() {
    $('.tab-content').hide();
    $('#notFound').append('<h4>404 Error!</h4><p>The page at "'
      + location.hostname + location.pathname + location.search
      + '" can\'t be found. Were you looking for bacon again? None here my friend. Why don\'t you just head back to my home page?!</p>'
      + '<img class=bacon src="img/bacon.gif"></img'
    );
    $('#notFound').fadeIn(700);
  };

  module.pageController = pageController;
})(window);

setRouteMapping();
