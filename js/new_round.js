var flashNext = require('./flash_next.js').flashNext;
var showAgain = require('./show_again.js').showAgain;
var newColor = require('./new_color.js').newColor;
var setActiveTrue = require('./toggle_active.js').setActiveTrue;

exports.newRound = function(answers, score) {
  answers.push(newColor());
  console.log(answers);
  var flashTime = 1000 - 5 * score;
  if (flashTime < 50) {
    flashTime = 50;
  }
  flashNext(answers[0], flashTime);
  $("#turn-display").show();
  $("#turn-display").text("Turn: 1");
  var i = 1;
  var flashInterval = window.setInterval(handleButtonFlash, flashTime);
  function handleButtonFlash() {
    if(i < answers.length) {
      flashNext(answers[i], flashTime);
      i++;
      $("#turn-display").text("Turn: " + i);
    } else {
      showAgain();
      i = 0;
      clearInterval(flashInterval);
      setActiveTrue();
    }
  }
  return answers;
};
