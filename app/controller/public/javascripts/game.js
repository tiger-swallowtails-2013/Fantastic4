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

Game = function(){
  this.start = function() {
    console.log("game start")
    var game_started = false
    console.log(document)
    var userInputElement = document.getElementById('userArea');
    console.log(userInputElement)
    var gameText = document.getElementById('game_text');

    userInputElement.addEventListener('keyup', function() {
      console.log("in event listener")

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
  var move_turtle = function(){
    var image = document.getElementById('turtle');
    console.log("turtle moved")
    position += 5
    image.style.marginLeft = position
  }

var Matcher = function (input,match_text_element){
   console.log("running matcher")
   var output={}
    var x = input.value.length;
    var match_area = match_text_element.innerText.substring(0,x);
    if(input.value === match_area){
      match_text_element.innerHTML = "<span style='color:green'><u>" + match_area + "</u></span>" + match_text_element.innerText.replace(match_area,"")
      if ( x > 0 ){ // need to fix blank key issue
      move_turtle()
    }
    }
    if(input.value === match_text_element.innerText){
      console.log("complete")
      output.match = true
    }

    return output

}

