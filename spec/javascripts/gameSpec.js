describe("Game.start", function() {
  it("ensures timer gets called on keyup", function(){ 
    var userInputElement = document.createElement('input')
    userInputElement.setAttribute('id', 'userArea')
    document.body.appendChild(userInputElement)
    game = new Game()
    game.start()

    // ACT
    userInputElement.dispatchEvent(new Event('keyup'))

    // ASSERT
    expect(timer.startTime).toBeDefined()
  });
});



// describe("Game setup", function(){
//   it("selects the game text from the dom", function(){
//     var gameText = document.createElement('div')
//     gameText.id = 'game_text'
//     gameText.innerHTML = "Some text"
//     document.body.appendChild(gameText)
//     expect()
//   })
// })