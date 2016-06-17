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

  //set up one as well for badges, accessing badge_count, and summing those in an array reduce

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
    //above function will return something like "Beginner in: "
    if (!accumulator[classifier]) {
      accumulator[classifier] = [];
    };
    accumulator[classifier].push('  ' + Object.getOwnPropertyNames(current));
    return accumulator;
  }, {});

  treehouse.functionalAppend = function(obj) {
    for (x in obj) {
      $('#treehouseStats').append('<p>' + x + ' ' + obj[x] + '</p>');
    }
  };
  treehouse.functionalAppend(treehouse.assessLevel);

  // treehouse.parseTreehouse = function() {
  //   var treehouseJSON = [];
  //   $.getJSON('treehouse.json', function(data){
  //     $.each(data, function(index, value){
  //       treehouseJSON.push(value);
  //     });
  //   }).done(function(){
  //     console.log(treehouseJSON[0]);
  //     console.log(treehouseJSON[1]);
  //     console.log(treehouseJSON[2]);
  //     console.log(treehouseJSON[3]);
  //     console.log(treehouseJSON[4]);
  //     console.log(treehouseJSON[5][2].courses.length);
  //     console.log(treehouseJSON[6]);
  //     if (!localStorage.treehouseStats) {
  //       localStorage.setItem('treehouseStats', JSON.stringify(treehouseJSON));
  //     }
  //     console.log(treehouseJSON);
  //     return treehouseJSON;
  //   });
  // };

  // treehouse.getMyStats = function() {
  //   var statsArray = parseTreehouse();
  //   var name = statsArray[0];
  //   var badges = statsArray[5];
  //   var points = statsArray[6];
  //   console.log('Name: ' + name + ', Badges: ' + badges + ', Points: ' + points);
  //   // var treehouseBadges = statsArray.map(function(element){
  //   //   return statsArray;
  //   // });
  // }

  module.treehouse = treehouse;
})(window);
