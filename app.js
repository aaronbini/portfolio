var projectsArray = [];

function Project(obj) {
  this.title = obj.title;
  this.dateFinished = obj.dateFinished;
  this.url = obj.url;
  this.description = obj.description;
  this.sourceCode = obj.sourceCode;
  this.category = obj.category;
}

Project.prototype.createHTML = function () {
  var template = Handlebars.compile($('#project-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.dateFinished))/60/60/24/1000);
  console.log(this.daysAgo);
  this.finishStatus = (this.dateFinished !== 'not finished') ? 'finished ' + this.daysAgo + ' days ago' : '(incomplete)';

  return template(this);
};

if (typeof projects !== 'undefined') {
  projects.sort(function(a,b){
    return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
  });
};

projects.forEach(function(element){
  projectsArray.push(new Project(element));
});

projectsArray.forEach(function(element){
  var elToAppend = element.createHTML();
  $('#projects').append(elToAppend);
});
