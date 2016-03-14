var newColor = require('./new_color.js').newColor;
var flashNext = require('./flash_next.js').flashNext;
var showAgain = require('./show_again.js').showAgain;
var newRound = require('./new_round.js').newRound;
var playerLose = require('./player_lose.js').playerLose;

$(function() {
  var userGuesses = [];
  var answers = [];
  var guessIndex = 0;
  $('#start-game').click(function() {
    answers = [];
    $('#start-game').hide();
    answers = newRound(answers);
  });

  $('.color-buttons').click(function() {
    console.log(answers);
    console.log(userGuesses);
    var color = $(this).attr('id');
    userGuesses.push(color);
    if (userGuesses[guessIndex] === answers[guessIndex]) {
      guessIndex++
      if (guessIndex === answers.length) {
        userGuesses = [];
        guessIndex = 0;
        answers = newRound(answers)
      }
    } else {
      answers = [];
      guessIndex = 0;
      userGuesses = [];
      playerLose();
    }
  });
});
