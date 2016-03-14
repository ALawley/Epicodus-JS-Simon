(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./flash_next.js":2,"./new_color.js":3,"./pause.js":4}],2:[function(require,module,exports){
exports.flashNext = function(color) {
  $('.color-buttons').hide();
  $('#' + color).show();
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
exports.pause = function(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}

},{}]},{},[1]);
