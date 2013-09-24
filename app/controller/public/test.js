var Game = {
  startTime: 0,
  timer: function() {
    return this.startTime = 4
  },
  listen: function() {
    this.timer();
  },
  start: function() {
    var userInputElement = document.getElementById('userArea');
    userInputElement.addEventListener('keyup', function() {
      Game.listen();
    });  
  }
}
