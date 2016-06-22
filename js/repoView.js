(function(module) {
  var repoView = {};

  var repoRender = Handlebars.compile($('#git-template').text());

  repoView.stickOnPage = function() {


    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#gitstats ul').append(
      repos.filterTime('name').map(repoRender)
    );
  };

  module.repoView = repoView;
})(window);
