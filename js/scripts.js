
$(document).ready(function() {
  $("#crypto").submit(function(event) {
    var message = $("#message").val();
    var squareVal = Math.floor(Math.sqrt(message.length)) + 1;
    alert(squareVal);
    event.preventDefault();
  });
});
