var requestProxy = require('express-request-proxy'),
  Zillow = require('node-zillow'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();


var proxyZillow = function (request, response) {
  var parameters = {
    state: 'OR',
    childtype: 'county'
  };
  var zillow = new Zillow(process.env.ZILLOW_TOKEN);
  console.log('routing zillow request');
  zillow.get('GetRegionChildren', parameters).then(function(result) {
    console.log(result);
    return result;
  });
};

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

// var proxyZillow = function(request, response) {
//   (requestProxy({
//     url: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws_id=' + process.env.ZILLOW_TOKEN + '&state=OR&city=portland&childtype=neighborhood',
//   }))(request, response);
// };

var proxyTrulia = function(request, response) {
  (requestProxy({
    url: 'http://api.trulia.com/webservices.php?library=TruliaStats&function=getCountyStats&county=Multnomah&state=OR&startDate=2016-05-20&endDate=2016-06-21&statType=listings&apikey=8c2r4kqm6vvq8rdqjv333x7y',
  }))(request, response);
};

// &childtype=county

// &city=seattle&childtype=neighborhood

app.get('/trulia', proxyTrulia);

app.get('/github/*', proxyGitHub);

app.get('/zillow', proxyZillow);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
