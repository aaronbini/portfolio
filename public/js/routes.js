function setRouteMapping() {

  page.base('/');

  page('/', pageController.homeDisplay);
  page('about', pageController.aboutDisplay);
  page('projects', pageController.projectsDisplay);
  page('hobbies', pageController.hobbiesDisplay);
  page('*', pageController.pageNotFound);
  page();
}

(function(module) {
  var pageController = {};

  var $aboutContact = $('#aboutContact');
  var $projects = $('#projects');
  var $hobbies = $('#hobbies');
  var $notFound = $('#notFound');

  function showThisSection (element, element2, callback) {
    $('.tab-content').hide();
    element2.empty();
    if (callback) callback();
    element.fadeIn(500);
  }

  pageController.homeDisplay = function() {
    $('.tab-content').fadeIn(500);
    $('#notFound').empty();
  };

  pageController.aboutDisplay = function () {
    showThisSection($aboutContact, $notFound);
  };

  pageController.projectsDisplay = function () {
    showThisSection($projects, $notFound);
  };

  pageController.hobbiesDisplay = function() {
    showThisSection($hobbies, $notFound);
  };

  pageController.pageNotFound = function() {
    function appendMessage () {
      $notFound.append('<h2>Does Not Compute</h2>'
        + '<h4>404 Error!</h4><p>The page at "'
        + location.hostname + location.pathname + location.search
        + '" can\'t be found. Were you looking for bacon again? None here my friend. Why don\'t you just head back to my home page?!</p>'
        + '<img class=bacon src="img/bacon.gif"></img'
      );
    };
    showThisSection($notFound, $notFound, appendMessage);
  };

  module.pageController = pageController;
})(window);

setRouteMapping();
