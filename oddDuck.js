var oddDuck = function(array){
  var tempArray = array;
  for (i = 0; i < array.length; i++) {
      var counter = 0;
      for(j = 0 ; j < tempArray.length; j++){
        // getting duplicates and count how many times duplicated
        if(array[i] === tempArray[j]){
            counter++;
        }
      }
      // checking the single word
      if(counter == 1){
        return   array[i];
      }
      counter = 0;
  }
}

var query = new XMLHttpRequest();
// add state listener
query.onreadystatechange = function() {
    // checking query status
  if (query.readyState == 4 && (query.status == 200 || query.status == 0)) {
    // The query is OK
    var challengeArray = JSON.parse(query.responseText);
    var quiz = challengeArray.quiz;
    var oddDuckobject = oddDuck(quiz);
    console.log(oddDuckobject);
  }

};

query.open("GET","https://api2.appspotr.com/givemeachallenge");
query.send(null);
