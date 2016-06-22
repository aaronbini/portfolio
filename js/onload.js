$(function(){
  Project.fetchAll(pageView.indexPageLoad);
  repos.makeHeadRequest(repos.requestRepos, repoView.stickOnPage);
});
