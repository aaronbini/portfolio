var zillow = {};
// console.log('zillo');
// function delay () {
//   window.setTimeout(
//     console.log(zillo), 3000);
// };
// delay();


zillow.id = 'X1-ZWz19oh35h56h7_2jayc';
zillow.state = 'OR';
zillow.datas = [];

zillow.requestData = function() {
  $.ajax({
    url: '/zillow',
    type: 'GET',
    // headers: { 'Authorization': 'token ' + githubToken },
    success: function(data, message, xhr) {
      // console.log(data);
      console.log(message);
      console.log(xhr);
    }
  });
};

// zillow.requestData();
