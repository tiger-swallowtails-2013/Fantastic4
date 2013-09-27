var Timer = function() {
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



  var scary_position = 0


var Game = function(){
  var gameText = document.getElementById('game_text');
  var game_started = false
  var game_done = false
  this.start = function() {
    var userInputElement = document.getElementById('userArea');
    userInputElement.addEventListener('keyup', function() {


      //create a new timer, and start the timer
      if (game_started === false){
        timer = new Timer();
        timer.start()
        game_started = true
      }

      if ((new Date() - timer.startTime) > 2000) {
        var scary = document.getElementById('zee')

        scary.style.display = "inline"
      }

      console.log(game_done)
      //match input with text on keyup
      matcher = new Matcher(userInputElement,gameText);
      if(matcher.match === true && game_done === false){
        timer.stop();
        game_done = true
        alert("Congratulations! " + userInputElement.value.split('').length/(timer.totalTime()) + " wpm")
      }


    });
  }

}

  var position = 0

  var move_turtle = function(){
    var image = document.getElementById('turtle');
    console.log("turtle moved")
    position += 5
    image.style.marginLeft = position
  }


var position = 0
var Matcher = function (input,match_text_element){
 var output={}
 var input_length = input.value.length;
 var match_area = match_text_element.innerText.substring(0,input_length);
 if(input.value === match_area){
  match_text_element.innerHTML = "<span style='color:green'><u>" + match_area + "</u></span>" + match_text_element.innerText.replace(match_area,"")
      if ( input_length > 0 ){ // need to fix blank key issue
      //move turtle
  var image = document.getElementById('turtle');
  position += 5
  image.style.marginLeft = position

    }
  }
if(input.value === match_text_element.innerText){
  output.match = true
}

return output

}

