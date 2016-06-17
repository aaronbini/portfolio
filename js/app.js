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
    console.log(this.daysAgo);
    this.finishStatus = (this.dateFinished !== 'not finished') ? 'finished ' + this.daysAgo + ' days ago' : '(incomplete)';

    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
    });

    Project.all = rawData.map(function(element){
      return new Project(element);
    });

    // rawData.forEach(function(ele) {
    //   Project.all.push(new Project(ele));
    // });
  };

  Project.fetchAll = function (viewCallback) {
    //this does not check if changes have been made to projects.json
    //need to write code to check changes and then update localStorage version accordingly
    //or just get rid of local storage version and always pull in from projects.json
    if (localStorage.rawProjects !== 'undefined' && localStorage.rawProjects !== null) {
      Project.loadAll(JSON.parse(localStorage.rawProjects));
      Favorite.fetchAll();
      viewCallback();
      parseTreehouse();
      // getMyStats();
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
        viewCallback();
        parseTreehouse();
        // getMyStats();
      });
    }
  };

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

    Favorite.all = rawData.map(function(element){
      return new Favorite(element);
    });

    // rawData.forEach(function(ele) {
    //   Favorite.all.push(new Favorite(ele));
    // });
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
  
  module.Project = Project;
  module.Favorite = Favorite;
})(window);
