var zillow = {};
zillow.id = 'X1-ZWz19oh35h56h7_2jayc';
zillow.state = 'OR';
zillow.datas = [];

zillow.requestData = function() {
  $.ajax({
    url: ' https://www.zillow.com/webservice/GetRegionChildren.htm?zws_id=' + zillow.id + '&state=' + zillow.state + '&childtype=county',
    type: 'GET',
    // headers: { 'Authorization': 'token ' + githubToken },
    success: function(data, message, xhr) {
      zillow.datas = data;
      console.log(zillow.datas);
    }
  });
};

zillow.requestData();
