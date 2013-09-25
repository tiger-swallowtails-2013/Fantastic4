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

  // match_text: function(string) {
  //   if string === 

  // }
}


var match_text = document.getElementById('game_text');

var input = document.getElementById('userArea');
input.addEventListener('keyup', function(){
  var x = input.value.length;
  var match_area = match_text.innerText.substring(0,x);
  if(input.value === match_area){
    match_text.innerHTML = "<span style='color:green'><u>" + match_area + "</u></span>" + match_text.innerText.replace(match_area,"")
  
  }
});