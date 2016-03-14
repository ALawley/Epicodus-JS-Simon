exports.newColor = function() {
  var colorNumber = Math.floor(Math.random() * 4);
  if (colorNumber === 0) {
    return "green";
  } else if (colorNumber === 1) {
    return "blue";
  } else if (colorNumber === 2) {
    return "red";
  } else {
    return "yellow";
  }
};
