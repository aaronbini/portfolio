(function(module){
  //empty object to hold these methods
  var treehouse = {};

  var pointsArray =  [
    {'Design': 0},
    {'HTML': 1157},
    {'CSS': 1779},
    {'JavaScript': 5408},
    {'Ruby': 3},
    {'PHP': 1490},
    {'WordPress': 0},
    {'iOS': 0},
    {'Android': 0},
    {'Development Tools': 1258},
    {'Business': 0},
    {'Python': 0},
    {'Java': 0},
    {'Digital Literacy': 55},
    {'Game Development': 0},
    {'C#': 3},
    {'Databases': 244}
  ];

  treehouse.parseTreehouse = function() {
    var treehouseJSON = [];
    $.getJSON('js/treehouse.json', function(data){
      $.each(data, function(index, value){
        treehouseJSON.push(value);
        return treehouseJSON;
      });
    }).done(function(){
      if (!localStorage.treehouseStats) {
        localStorage.setItem('treehouseStats', JSON.stringify(treehouseJSON));
      }
      var courseCount = treehouseJSON[5].reduce(function(accumulator, current){
        return accumulator + current.courses.length;
      }, 0);
      $('#treehouseCourses').html('<p><b><em>Courses Completed</em></b> : ' + courseCount + '</p>');
      $('#treehouseCourses').append('<p><b><em>Badges Earned</em</b> : ' + treehouseJSON[5].length + '</p>');
      $('#treehouseCourses').append('<p><b><em>Points Earned</em</b> : ' + treehouseJSON[6].total + '</p>');
      return courseCount;
    });
  };
  treehouse.parseTreehouse();

  treehouse.classifyExperience = function(obj) {
    for (var x in obj) {
      if (obj[x] <= 500) {console.log('beginner'); return 'Beginner in: ';} else
      if (obj[x] <= 2000) {console.log('intermediate'); return 'Intermediate in: ';} else {
        console.log('advanced');
        return 'Advanced in: ';
      }
    }
  };

  treehouse.assessLevel = pointsArray.reduce(function(accumulator, current) {
    var classifier = treehouse.classifyExperience(current);
    if (!accumulator[classifier]) {
      accumulator[classifier] = [];
    };
    accumulator[classifier].push('  ' + Object.getOwnPropertyNames(current));
    return accumulator;
  }, {});

  treehouse.functionalAppend = function(obj) {
    for (x in obj) {
      $('#treehouseStats').find('img').after('<p><b><em>' + x + '</em></b> ' + obj[x] + '</p>');
    }
  };
  treehouse.functionalAppend(treehouse.assessLevel);

  module.treehouse = treehouse;
})(window);
