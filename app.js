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
  var $newProject = $('article.articleTemplate').clone();

  $newProject.attr('data-category', this.category);

  $newProject.find('h3').html(this.title);
  $newProject.find('a').html(this.url);
  $newProject.find('section.description').html(this.description);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.dateFinished))/ 60/60/24/1000) + ' days ago');

  $newProject.append('<hr>');
  $newProject.removeClass('articleTemplate');
  console.log($newProject.html());
  return $newProject;
};

projects.sort(function(a,b){
  return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
});

projects.forEach(function(element){
  projectsArray.push(new Project(element));
});

projectsArray.forEach(function(element){
  $('#projectsHighlighted').append(element.createHTML());
});
