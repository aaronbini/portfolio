//add favorites on to page
// pageView.populateFilter = function () {
//   $('.favorites').each(function(){
//     var val = $(this).data('category');
//     var option = '<option value="' + val + '">' + val + '</option>';
//     if ($('#favorites-filter option[value="' + val + '"]').length === 0) {
//       $('#favorites-filter').append(option);
//     }
//   });
// };
//handle event when filter category is selected
// pageView.handleFavoriteFilter = function () {
//   $('#favorites-filter').on('change', function () {
//     var val = $(this).val();
//     if (val) {
//       $('.favorites').hide();
//       $('.favorites[data-category="' + val + '"]').fadeIn(700);
//     } else {
//       $('.favorites').fadeIn(700);
//     }
//   });
// };

// Favorite.all.forEach(function(element){
//   $('#interests').append(element.toHTML());
//   $('#interests').children(':not(h2, select)').hide();
// });
// pageView.populateFilter();
// pageView.handleFavoriteFilter();

// $('#visitorStats').on('click', function(){
//   $(this).hide();
//   $('#treehouseRoute').hide();
//   $('#treehouseStats').find('label').hide();
//   $('#visitorGo').fadeIn(700);
//   $('#visitorGo').attr('href', 'http://teamtreehouse.com/' + $('#treehouseRoute').val() + '.json');
// });
//
// $('#visitorGo').on('click', function(){
//   $(this).hide();
//   $('#visitorGo').hide();
//   $('#visitorStats').fadeIn(700);
//   $('#treehouseRoute').val('').fadeIn(700);
//   $('#treehouseStats').find('label').fadeIn(700);
// });

// function Favorite (obj) {
//   this.title = obj.title;
//   this.url = obj.url;
//   this.description = obj.description;
//   this.category = obj.category;
// };
//
// Favorite.all = [];
//
// Favorite.prototype.toHTML = function () {
//   var template = Handlebars.compile($('#favorite-template').text());
//   return template(this);
// };
//
// Favorite.loadAll = function(rawData) {
//   rawData.sort(function(a,b) {
//     return (new Date(b.dateFinished)) - (new Date(a.dateFinished));
//   });
//
//   Favorite.all = rawData.map(function(element){
//     return new Favorite(element);
//   });
// };

// Favorite.fetchAll = function () {
//   if (localStorage.rawFavorites) {
//     //this will need to be rewritten to account for favorites that are added after initial load into localStorage
//     Favorite.loadAll(JSON.parse(localStorage.rawFavorites));
//   } else {
//     var favoriteJSON = [];
//     $.getJSON('/data/favorites.json', function(data){
//       $.each(data, function(index, value){
//         favoriteJSON.push(value);
//       });
//     }).done(function(){
//       Favorite.loadAll(favoriteJSON);
//       localStorage.setItem('rawFavorites', JSON.stringify(Favorite.all));
//     });
//   }
// };

//Unused in server.js
// var proxyGitHub = function(request, response) {
//   console.log('Routing GitHub request for', request.params[0]);
//   (requestProxy({
//     url: 'https://api.github.com/' + request.params[0],
//     dataType: 'json',
//     headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
//   }))(request, response);
// };
//
// app.get('/github/*', proxyGitHub);
