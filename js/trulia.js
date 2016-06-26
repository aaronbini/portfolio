var trulia = {};
trulia.id = '8c2r4kqm6vvq8rdqjv333x7y';
// zillow.state = 'OR';
trulia.datas = [];

// trulia.requestData = function() {
//   $.ajax({
//     url: '/trulia',
//     type: 'GET',
//     // headers: { 'Authorization': 'token ' + githubToken },
//     success: function(data, message, xhr) {
//       trulia.datas = data;
//       console.log(data);
//       console.log(message);
//       console.log(xhr);
//       console.log(trulia.datas);
//     }
//   });
// };

trulia.requestJSON = function () {
  $.getJSON('/trulia', function(data){
    console.log(data);
  });
};

trulia.requestData();
