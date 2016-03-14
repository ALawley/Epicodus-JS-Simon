var newColor = require('./new_color.js').newColor;
var flashNext = require('./flash_next.js').flashNext;
var pause = require('./pause.js').pause;

function showAgain() {
  $('.color-buttons').show();
}

$(function() {
  var userGuesses = [];
  var answers = [];
  var guessIndex = 0;
  $('#start-game').click(function() {
    answers = [];
    $('#start-game').hide();
    answers.push(newColor());
    $('.color-buttons').hide();
    flashNext(answers[0]);
    setTimeout(showAgain, 1000);
  });

  $('.color-buttons').click(function() {
    var color = $(this).attr('id');
    userGuesses.push(color);
    if (userGuesses[guessIndex] === answers[guessIndex]) {
      guessIndex++
      if (guessIndex === answers.length) {
        newRound()
      }
    } else {
      playerLose()
    }
  });

  function newRound() {
    userGuesses = [];
    guessIndex = 0;
    answers.push(newColor());
    $('.color-buttons').hide();
    flashNext(answers[0]);
    var i = 1;
    var flashInterval = window.setInterval(handleButtonFlash, 1000);
    function handleButtonFlash() {
      if(i < answers.length) {
        console.log(answers.length);
        console.log(i);
        flashNext(answers[i]);
        i++;
      } else {
        showAgain();
        i = 0;
        clearInterval(flashInterval);
      }
    }
  }

  function playerLose() {
    alert("You lose");
  }

});
