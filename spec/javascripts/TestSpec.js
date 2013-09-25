describe("Game.start", function() {
  it("ensures listen gets called on keyup", function(){ 
    var userInputElement = document.createElement('input');
    userInputElement.id="userArea";
    document.body.appendChild(userInputElement);

    Game.start();

    // ACT
    userInputElement.dispatchEvent(new Event('keyup'));

    // ASSERT
    expect(Game.timer).toBeTruthy();
  });
});


describe("Game.timer", function() {
  it("starts the timer", function() {
    expect(Game.timer()).not.toEqual(null)
  });
});

describe("Game.match", function() {
  it("returns true if input matches string")
})



//var text = document.getElementById('game_text').innerText