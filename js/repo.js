(function(module) {
  var repos = {};

  repos.all = [];

  //filters a particular reppo[attr] on a RegExp, in this case class because I want to get rid of all repos that contains the strings 'class' and 'lab'
  repos.filterTime = function(attr) {
    return repos.all.filter(function(repo) {
      if (repo[attr].search(/lab/) == -1 && repo[attr].search(/class/) == -1) {return true;}
    });
  };

  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/user/repos' +
            '?per_page=50' +
            '$sort=updated',
      type: 'GET',
      success: function (data, message, xhr) {
        repos.all = data;
        localStorage.setItem('gitRepos', JSON.stringify(data));
      }
    }).done(function(){
      //populate div with Handlebars template filled with repos
      callback();
    });
  };

  repos.makeHeadRequest = function (callback1, callback2) {
    $.ajax({
      type: 'HEAD',
      url: 'https://api.github.com/users/aaronbini/repos',
      complete: function(message, text) {
        //this returns the Etag value, can be used for checking if we are up-to-date;
        if (localStorage.gitRepos) {
          if (message.getResponseHeader('Etag') === localStorage.getItem('gitEtag')) {
            repos.all = JSON.parse(localStorage.getItem('gitRepos'));
            //this callback should populate the 'gitstats' div with Handlebars template filled out with repos
            callback2();
          }
        } else {
          localStorage.setItem('gitEtag', message.getResponseHeader('Etag'));
          callback1(callback2);
        }
      }
    });
  };

  module.repos = repos;
})(window);
