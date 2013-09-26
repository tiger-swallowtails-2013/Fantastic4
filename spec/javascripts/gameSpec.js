describe("Game function", function() {
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
  it("retrieves text for game", function(){
    var gametextdiv = document.createElement('div')
    gametextdiv.id = "game_text"
    gametextdiv.innerText = "It just comes back in flashes you know"
    document.body.appendChild(gametextdiv)
    game = new Game()
    game.start()

    // 1append element to the dom
    // 2change the dom
    // 3check if dom was changed the way you expected


    expect(game.getGameText().innerHTML).toEqual("It just comes back in flashes you know")
  })
  it("test that input matching text")
  it("stops timer when game is done")
  it("renders message to user when game is over")
  it("renders message to user when game is over")
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