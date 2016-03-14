(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./new_round.js":4,"./player_lose.js":5,"./toggle_active.js":7}],2:[function(require,module,exports){
exports.flashNext = function(color) {
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
  setTimeout(reveal, 100);
}

},{}],3:[function(require,module,exports){
exports.newColor = function() {
  var colorNumber = Math.floor(Math.random() * 4);
  if (colorNumber === 0) {
    return "green";
  } else if (colorNumber === 1) {
    return "blue";
  } else if (colorNumber === 2) {
    return "red";
  } else {
    return "yellow"
  }
};

},{}],4:[function(require,module,exports){
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

},{"./flash_next.js":2,"./new_color.js":3,"./show_again.js":6,"./toggle_active.js":7}],5:[function(require,module,exports){
exports.playerLose = function() {
  alert("You lose");
  $('.color-buttons').hide();
  $('#start-game').show();
}

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
var active = false;

exports.setActiveTrue = function() {
  active = true;
}

exports.getActive = function() {
  return active;
}

exports.setActiveFalse = function() {
  active = false;
}

},{}]},{},[1]);
