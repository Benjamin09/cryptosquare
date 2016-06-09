var squareColumns = [];
var i;
var jumbledArray = [];
var outputString = "";
//for testing

$(document).ready(function() {
  $("#crypto").submit(function(event) {
    squareColumns = [];
    var message = $("#message").val();
    //this place for taking away spaces and punctuation
    var squareVal = Math.floor(Math.sqrt(message.length)) + 1;
    if ( Math.sqrt(message.length) % 1 === 0 ) {
      squareVal -= 1;
    }
    for (i = 0; i <= squareVal; ++i) {
      squareColumns[i] = [];
    }
    squareColumns.forEach(function(column) {
      for (i = 0; i < squareVal; ++i) {
        column[i] = message.substr(0,1);
        message = message.substr(1);
      }
    });
    for (i = 0; i < squareVal; ++i) {
      squareColumns.forEach(function(column) {
        jumbledArray.push(column[i]);
      });
    }
    while (jumbledArray.length !== 0) {
      var j = 1;
      outputString += jumbledArray.shift();
      if ( j % 6 === 0 ) {
        outputString += " ";
      }
      j++;
    }
    $("#output").text(outputString);
    event.preventDefault();
  });
});
