exports.showAgain = function() {
  var colors = ['red','yellow','blue','green'];
  var buttonClasses = ['danger','warning','primary','success'];
  $('.color-buttons').removeClass('btn-default');
  for(var i = 0; i <= 3; i++) {
    $('#' + colors[i]).removeClass('btn-' + buttonClasses[i]);
    $('#' + colors[i]).addClass('btn-' + buttonClasses[i]);
  }
  $("#turn-display").hide();
};
