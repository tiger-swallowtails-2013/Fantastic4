var Timer = function() {
  this.startTime = null;
  this.stopTime = null;
}

Timer.prototype.logTheTime = function(){
  return new Date().getTime();
}

Timer.prototype.start = function(){
  this.startTime = this.logTheTime();
}

Timer.prototype.stop = function(){
  this.stopTime = this.logTheTime();
}

Timer.prototype.totalTime = function(){
  return (this.stopTime - this.startTime);
}
