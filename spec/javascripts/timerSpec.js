describe("timer", function(){
  it("calculates elapsed time", function(){
    var timer = new Timer();

    timer.start();
    
    waits(1000);
    
    runs(function () {
      timer.stop();
      expect(timer.totalTime()).toBeLessThan(1010);
      expect(timer.totalTime()).toBeGreaterThan(990);
    }); 
  })
})



