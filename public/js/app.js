(function(module) {
  function Project(obj) {
    this.title = obj.title;
    this.dateFinished = obj.dateFinished;
    this.url = obj.url;
    this.description = obj.description;
    this.sourceCode = obj.sourceCode;
    this.category = obj.category;
  }

  Project.all = [];

  Project.prototype.createHTML = function () {
    var template = Handlebars.compile($('#project-template').text());
    this.daysAgo = parseInt((new Date() - new Date(this.dateFinished))/60/60/24/1000);
    this.finishStatus = (this.dateFinished !== 'not finished') ? 'Finished ' + this.daysAgo + ' days ago' : '(in-progress)';

    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
    });

    Project.all = rawData.map(function(element){
      return new Project(element);
    });
  };

  Project.fetchAll = function (viewCallback) {

    var projectJSON = [];
    $.getJSON('/data/projects.json', function(data){
      $.each(data, function(index, value){
        projectJSON.push(value);
      });
    }).done(function(){
      Project.loadAll(projectJSON);
      viewCallback();
    });
  };

  Project.fetchAll(pageView.indexPageLoad);

  module.Project = Project;
})(window);
