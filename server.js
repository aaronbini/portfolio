var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var path = require('path');
var indexHtml = path.resolve( __dirname, 'index.html' );

app.use(express.static('./'));

app.get('*', function(request, response) {
  response.sendFile(indexHtml);
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
