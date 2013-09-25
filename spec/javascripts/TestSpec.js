describe("Game.start", function() {
  it("ensures timer gets called on keyup", function(){ 
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

describe("Game setup", function(){
  it("selects the game text from the dom", function(){
    var gameText = document.createElement('div')
    gameText.id = 'game_text'
    gameText.innerHTML = "Some text"
    document.body.appendChild(gameText)
    expect()
  })
})

describe("Game.timer", function() {
  it("starts the timer on keyup", function() {
    expect(Game.timer()).not.toEqual(null)
  });
  it("stops the timer on game_text match", function() {})
  it("calculates total time", function(){})
});

describe("Game.match", function() {
  it("returns true if input matches string")
})


describe("Results", function(){
  it("calculates player's wpm")
})

//var text = document.getElementById('game_text').innerText

