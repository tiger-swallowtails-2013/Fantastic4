var Timer = function() {
  this.startTime = null;
  this.stopTime = null;
}

Timer.prototype.logTheTime = function(){
  return new Date().getTime();
}

Timer.prototype.start = function(){
  this.startTime = this.logTheTime();
  console.log("start" + this.startTime);
}

Timer.prototype.stop = function(){
  this.stopTime = this.logTheTime();
  console.log("stop" +this.stopTime);
}

Timer.prototype.totalTime = function(){
  console.log("compute the diff");
  console.log(this.stopTime - this.startTime);
  return (this.stopTime - this.startTime);
}
