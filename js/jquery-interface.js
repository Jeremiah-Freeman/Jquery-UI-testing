$(document).ready(function() {

  $("#tabs").tabs();

  $("#changeAnims").on("click", function() {
    $("#tabs"),tabs("option","hide","explode");
  });
});
 
