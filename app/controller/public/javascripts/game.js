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

function Game() {
  var gameText = document.getElementById('game_text');
  this.getGameText = function(){
    return gameText
  }
  this.start = function() {
    var game_started = false
    var userInputElement = document.getElementById('userArea');
    userInputElement.addEventListener('keyup', function() {
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

}

var position = 0
var Matcher = function (input,match_text_element){
 var output={}
 var x = input.value.length;
 var match_area = match_text_element.innerText.substring(0,x);
 if(input.value === match_area){
  match_text_element.innerHTML = "<span style='color:green'><u>" + match_area + "</u></span>" + match_text_element.innerText.replace(match_area,"")
      if ( x > 0 ){ // need to fix blank key issue
      
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

