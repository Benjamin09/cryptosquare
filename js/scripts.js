$(document).ready(function() {
  $("#crypto").submit(function(event) {
    var squareColumns = [];
    var i;
    var jumbledArray = [];
    var outputString = "";
    var message = $("#message").val();
    //this place for taking away spaces and punctuation
    var squareVal = Math.floor(Math.sqrt(message.length));
    // if ( Math.sqrt(message.length) % 1 === 0 ) {
    //   squareVal -= 1;
    // } not sure if this is necessary, will test
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
    var j = 0;
    while (jumbledArray.length !== 0) {
      if ( jumbledArray[0] === "" ) {
        jumbledArray.shift();
        j -= 1;
      } else {
        outputString += jumbledArray.shift();
      }
      j += 1;
      if ( j % 5 === 0 ) {
        outputString += " ";
        j = 0;
      }
    }
    $("#output").text(outputString);
    event.preventDefault();
  });
});
