var requestProxy = require('express-request-proxy'),
  Zillow = require('node-zillow'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var parameters = {
  state: 'OR',
  childtype: 'county'
};

var zillow = new Zillow(process.env.ZILLOW_TOKEN);

var proxyZillow = zillow.get('GetRegionChildren', parameters).then(function(results) {
  console.log(results);
});

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

// var proxyZillow = function(request, response) {
//   (requestProxy({
//     url: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws_id=' + process.env.ZILLOW_TOKEN + '&state=OR&childtype=county',
//   }))(request, response);
// };

app.get('/github/*', proxyGitHub);

app.get('/zillow/*', proxyZillow);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
