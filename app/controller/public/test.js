var Game = {
  start: function() {
    var userInputElement = document.getElementById('userArea');
    var gameText = document.getElementById('game_text');
    userInputElement.addEventListener('keyup', function() {
      Game.timer();
      Game.match_text(this.value);
    });  
  },

  timer_on: false,
  startTime: null,

  timer: function() {
    if (Game.timer_on === false) {
    startTime = new Date();
    timer_on = true;
    return true
    }
    else {
      return false
    }
  },

  match_text: function(string) {
    if string === 

  }
}