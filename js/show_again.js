exports.showAgain = function() {
  $('.color-buttons').removeClass('btn-default');
  $('#red').removeClass('btn-danger');
  $('#yellow').removeClass('btn-warning');
  $('#blue').removeClass('btn-primary');
  $('#green').removeClass('btn-success');
  $('#red').addClass('btn-danger');
  $('#yellow').addClass('btn-warning');
  $('#blue').addClass('btn-primary');
  $('#green').addClass('btn-success');
  $("#turn-display").hide();
}
