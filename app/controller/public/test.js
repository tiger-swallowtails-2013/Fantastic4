var Timer = function() {
  console.log("new Timer")
  this.startTime = null;
  this.stopTime = null;
  this.start = function (){
    this.startTime = this.logTheTime();
  }
  this.stop = function (){
    this.stopTime = this.logTheTime();
  }
  this.logTheTime = function (){
    return new Date().getTime();
  }
  this.totalTime = function(){
    return (Math.round((this.stopTime - this.startTime)/1000));
  }
}

var Game = function(){
  this.start = function() {
    console.log("starting game")
    var game_started = false
    var userInputElement = document.getElementById('userArea');
    var gameText = document.getElementById('game_text');
    userInputElement.addEventListener('keyup', function() {
      console.log("add event listener")

      //create a new timer, and start the timer
      if (game_started === false){
        timer = new Timer();
        timer.start()
        game_started = true
      }

      //match input with text on keyup
      matcher = new Matcher(userInputElement,gameText);

      if(matcher.match === true){
        timer.stop();
        alert("Congratulations! You finished in " + (timer.totalTime()).toString() + " seconds")
      }


    });  
  }


  //, move_turtle: function(){
  //   var image = document.getElementById('turtle');
  //   console.log(image);
  //   image.style.marginleft += "20px"
  // },

  // match_text: function(string) {
  //   if string === 

  // }
}


var Matcher = function (input,match_text_element){
   console.log("running matcher")
   var output={}
  // var match_text_element = document.getElementById('game_text');
  // var input = document.getElementById('userArea');
  // input.addEventListener('keyup', function(){
    var x = input.value.length;
    var match_area = match_text_element.innerText.substring(0,x);
    if(input.value === match_area){
      match_text_element.innerHTML = "<span style='color:green'><u>" + match_area + "</u></span>" + match_text_element.innerText.replace(match_area,"")
      //Game.move_turtle()
    }
    if(input.value === match_text_element.innerText){
      console.log("complete")
      output.match = true
      //stop the timer
      //calculate wpm
      //display wpm
    }

    return output

}

window.onload = function(){
  console.log("document ready")
  game = new Game()
  game.start()
}