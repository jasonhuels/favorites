$(function() {
  $(".form1").submit(function(event) {
    var responses = [];
    responses[0] = $("#color").val();
    responses[1] = $("#food").val();
    responses[2] = $("#animal").val();
    responses[3] = $("#band").val();

    for(let i=0; i<responses.length; i++) {
      $("#list").append("<li>" + responses[i] + "</li>");
    }

    event.preventDefault();
  });
});
