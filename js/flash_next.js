exports.flashNext = function(color) {
  $('.color-buttons').hide();
  $('#' + color).show();
}
