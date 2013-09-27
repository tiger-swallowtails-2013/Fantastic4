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


var Game = function() {
  this.textElement = document.getElementById('game_text');
  this.inputElement = document.getElementById('userArea');
  this.started = false;

  this.timer = new Timer();
  this.matcher = new Matcher(this.inputElement, this.textElement);
  this.position = 0;

  var self = this;
  this.inputElement.addEventListener('keyup', function() {
    self.handleKeyUp();
  });

  this.start = function() {
    this.timer.start()
    this.started = true
  }

  this.handleKeyUp = function() {
    if (!this.started){
      this.start();
    }
    
    if(this.matcher.completeMatch()){
      this.stop();
    }

    if(this.matcher.match()) {
      this.moveTurtle();
    }

    if (timer.totalTime() >= 2) {
      this.showZee();
    }
  }

  this.moveTurtle = function() {
    var image = document.getElementById('turtle');
    this.position += 5
    image.style.marginLeft = this.position
  }

  this.showZee = function() {
    if(!this.zeeVisible) {
      var scary = document.getElementById('zee')  
      scary.style.display = "inline"  
      this.zeeVisible = true;
    }
  }
  
  this.stop = function() {
    this.timer.stop();
    alert("Congratulations! You finished in " + (this.timer.totalTime()).toString() + " seconds")
  }
}







var Matcher = function (input,match_text_element) {


  this.match = function() {
    var input_length = input.value.length;
    var match_area = match_text_element.innerText.substring(0,input_length);
    

    if (input.value === match_area) {
      this.highlightWords(match_area);  
      return true;
    }

    return false;
  }
  this.completeMatch = function() {
    return input.value === match_text_element.innerText;
  }

  this.highlightWords = function(match_area) {
    match_text_element.innerHTML = "<span style='color:green'><u>" + match_area + "</u></span>" + match_text_element.innerText.replace(match_area,"");
  }
}


