exports.flashNext = function(color, flashTime) {
  $('#red').removeClass('btn-danger');
  $('#yellow').removeClass('btn-warning');
  $('#blue').removeClass('btn-primary');
  $('#green').removeClass('btn-success');
  $('.color-buttons').addClass('btn-default');
  function reveal () {
    $('#' + color).removeClass('btn-default');
    if(color === 'red') {
      $('#red').addClass('btn-danger');
    } else if(color === 'yellow') {
      $('#yellow').addClass('btn-warning');
    } else if(color === 'blue') {
      $('#blue').addClass('btn-primary');
    } else {
      $('#green').addClass('btn-success');
    }
  }
  if (flashTime >= 120) {
    setTimeout(reveal, 100);
  } else {
    setTimeout(reveal, flashTime - 20);
  }
};
