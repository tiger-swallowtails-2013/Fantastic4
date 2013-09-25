describe("Game.start", function() {
  it("ensures listen gets called on keyup", function(){ 
    var userInputElement = document.createElement('input');
    userInputElement.id="userArea";
    document.body.appendChild(userInputElement);

    spyOn(Game, "listen");

    Game.start();


    // ACT
    userInputElement.dispatchEvent(new Event('keyup'));

    // ASSERT
    expect(Game.listen).toHaveBeenCalled();
  });
});


describe("Game.timer", function() {
  it("starts the timer", function() {
    expect(Game.timer).not.toEqual(null)
  });
});




//var text = document.getElementById('game_text').innerText