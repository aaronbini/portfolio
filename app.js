var projectsArray = [];

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
  console.log(this.daysAgo);
  this.finishStatus = (this.dateFinished !== 'not finished') ? 'finished ' + this.daysAgo + ' days ago' : '(incomplete)';

  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function () {
  if (localStorage.rawProjects !== 'undefined' && localStorage.rawProjects !== null) {
    Project.loadAll(JSON.parse(localStorage.rawProjects));
    Favorite.fetchAll();
    pageView.indexPageLoad();
  } else {
    var projectJSON = [];
    $.getJSON('projects.json', function(data){
      $.each(data, function(index, value){
        projectJSON.push(value);
      });
    }).done(function(){
      Project.loadAll(projectJSON);
      localStorage.setItem('rawProjects', JSON.stringify(Project.all));
      Favorite.fetchAll();
      pageView.indexPageLoad();
    });
  }
};

// if (typeof projects !== 'undefined') {
//   projects.sort(function(a,b){
//     return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
//   });
// };
//
// projects.forEach(function(element){
//   projectsArray.push(new Project(element));
// });

// projectsArray.forEach(function(element){
//   var elToAppend = element.createHTML();
//   $('#projects').append(elToAppend);
// });

var favoritesArray = [];

function Favorite (obj) {
  this.title = obj.title;
  this.url = obj.url;
  this.description = obj.description;
  this.category = obj.category;
};

Favorite.all = [];

Favorite.prototype.toHTML = function () {
  var template = Handlebars.compile($('#favorite-template').text());
  return template(this);
};

Favorite.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
  });

  rawData.forEach(function(ele) {
    Favorite.all.push(new Favorite(ele));
  });
};

Favorite.fetchAll = function () {
  if (localStorage.rawFavorites !=='undefined' && localStorage.rawFavorites !== null) {
    //this will need to be rewritten to account for favorites that are added after initial load into localStorage
    Favorite.loadAll(JSON.parse(localStorage.rawFavorites));
  } else {
    var favoriteJSON = [];
    $.getJSON('favorites.json', function(data){
      $.each(data, function(index, value){
        favoriteJSON.push(value);
      });
    }).done(function(){
      Favorite.loadAll(favoriteJSON);
      localStorage.setItem('rawFavorites', JSON.stringify(Favorite.all));
    });
  }
};

// favorites.forEach(function(element){
//   favoritesArray.push(new Favorite(element));
// });
//
// favoritesArray.forEach(function(element){
//   var elToAppend = element.toHTML();
//   $('#interests').append(elToAppend);
//   $('#interests').children(':not(h2, select)').hide();
// });
