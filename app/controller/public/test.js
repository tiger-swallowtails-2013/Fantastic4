var Game = {
  start: function() {
    var userInputElement = document.getElementById('userArea');
    userInputElement.addEventListener('keyup', function() {
      Game.listen();
    });  
  },
  listen: function() {
    this.timer();
  },
  startTime: null,
  timer: function() {
    return startTime = new Date()
  },
}
