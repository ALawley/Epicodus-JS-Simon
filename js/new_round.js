var flashNext = require('./flash_next.js').flashNext;
var showAgain = require('./show_again.js').showAgain;
var newColor = require('./new_color.js').newColor;
var setActiveTrue = require('./toggle_active.js').setActiveTrue;

exports.newRound = function(answers) {
  answers.push(newColor());
  flashNext(answers[0]);
  $("#turn-display").show();
  $("#turn-display").text("Turn: 1");
  var i = 1;
  var flashInterval = window.setInterval(handleButtonFlash, 1000);
  function handleButtonFlash() {
    if(i < answers.length) {
      console.log(answers.length);
      console.log(i);
      flashNext(answers[i]);
      i++;
      $("#turn-display").text("Turn: " + i);
    } else {
      showAgain();
      i = 0;
      clearInterval(flashInterval);
      setActiveTrue()
    }
  }
  return answers;
}
