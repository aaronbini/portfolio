var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var path = require('path');
var indexHtml = path.resolve( __dirname, './public/index.html');
var publicPath = path.resolve( __dirname, './public');

app.use(express.static(publicPath));

app.get('*', function(request, response) {
  console.log('index html: ', indexHtml);
  console.log('public path: ', publicPath);
  response.sendFile(indexHtml);
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
