(function(module) {
  var repoView = {};

  var repoRender = Handlebars.compile($('#git-template').text());

  repoView.stickOnPage = function() {
    $('#gitstats ul').append(
      repos.filterTime('name').map(repoRender)
    );
  };

  module.repoView = repoView;
})(window);
