var newRound = require('./new_round.js').newRound;
var playerLose = require('./player_lose.js').playerLose;
var setActiveTrue = require('./toggle_active.js').setActiveTrue;
var getActive = require('./toggle_active.js').getActive;
var setActiveFalse = require('./toggle_active.js').setActiveFalse;

$(function() {
  var userGuesses = [];
  var answers = [];
  var guessIndex = 0;
  $('#start-game').click(function() {
    answers = [];
    $('#start-game').hide();
    $('.color-buttons').show();
    answers = newRound(answers);
  });

  $('.color-buttons').click(function() {
    if (getActive() === true) {
      console.log(answers);
      console.log(userGuesses);
      var color = $(this).attr('id');
      userGuesses.push(color);
      if (userGuesses[guessIndex] === answers[guessIndex]) {
        guessIndex++
        if (guessIndex === answers.length) {
          userGuesses = [];
          guessIndex = 0;
          setActiveFalse();
          answers = newRound(answers)
        }
      } else {
        answers = [];
        guessIndex = 0;
        userGuesses = [];
        setActiveFalse();
        playerLose();
      }
    }
  });
});
