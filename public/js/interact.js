(function(module){

  var pageView = {};

  pageView.indexPageLoad = function () {
    Project.all.forEach(function(element){
      $('#projects').append(element.createHTML());
    });
  };
  
  module.pageView = pageView;
})(window);
