var points =  {
  'HTML': 1157,
  'CSS': 1779,
  'Design': 0,
  'JavaScript': 5408,
  'Ruby': 3,
  'PHP': 1490,
  'WordPress': 0,
  'iOS': 0,
  'Android': 0,
  'Development Tools': 1258,
  'Business': 0,
  'Python': 0,
  'Java': 0,
  'Digital Literacy': 55,
  'Game Development': 0,
  'C#': 3,
  'Databases': 244
};

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

function classifyExperience(obj) {
  for (var x in obj) {
    if (obj[x] <= 500) {console.log('beginner'); return 'Beginner in: ';} else
    if (obj[x] <= 2000) {console.log('intermediate'); return 'Intermediate in: ';} else {
      console.log('advanced');
      return 'Advanced in: ';
    }
  }
}

var assessLevel = pointsArray.reduce(function(accumulator, current) {
  var classifier = classifyExperience(current);
  //above function will return something like "Beginner in: "
  if (!accumulator[classifier]) {
    accumulator[classifier] = [];
  };
  accumulator[classifier].push('  ' + Object.getOwnPropertyNames(current));
  return accumulator;
}, {});

function functionalAppend (obj) {
  for (x in obj) {
    $('div').append('<p>' + x + ' ' + obj[x] + '</p>');
  }
}
functionalAppend(assessLevel);

//pointsArray.reduce();


function parseTreehouse () {
  var treehouseJSON = [];
  $.getJSON('treehouse.json', function(data){
    $.each(data, function(index, value){
      treehouseJSON.push(value);
    });
  }).done(function(){
    console.log(treehouseJSON);
    if (!localStorage.treehouseStats) {
      localStorage.setItem('treehouseStats', JSON.stringify(treehouseJSON));
    }
    return treehouseJSON;
  });
};
var experience = [];
function classifyExperience(obj) {
  for (var x in obj) {
    if (obj[x] <= 500) {console.log('beginner'); return 'Beginner in: ';} else
    if (obj[x] <= 2000) {console.log('intermediate'); return 'Intermediate in: ';} else {
      console.log('advanced');
      return 'Advanced in: ';
    }
  }
}

function functionalAppend (obj) {
  for (x in obj) {
    $('div').append('<p>' + x + ' ' + obj[x] + '</p>');
  }
}
functionalAppend(assessLevel);



// $('div').append('<p>Beginner in: ' + assessLevel['Beginner in: '] + '</p>');
// $('div').append('<p>Intermediate in: ' + assessLevel['Intermediate in: '] + '</p>');

function getMyStats () {
  var statsArray = parseTreehouse();
  var name = statsArray[0];
  var badges = statsArray[5];
  var points = statsArray[6];
  console.log('Name: ' + name + ', Badges: ' + badges + ', Points: ' + points);
  // var treehouseBadges = statsArray.map(function(element){
  //   return statsArray;
  // });
}
