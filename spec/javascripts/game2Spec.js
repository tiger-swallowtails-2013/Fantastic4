describe("moveTurtle", function(){

  it("moves the turtle's position", function(){
    var userInputElement = document.createElement('input')
    userInputElement.setAttribute('id', 'userArea')
    document.body.appendChild(userInputElement)
    //create turtle element and put into body
    var turtle = document.createElement('div')
    turtle.id = 'turtle'
    document.body.appendChild(turtle)

    game = new Game()
    var first_position = game.position
    game.moveTurtle()
    expect(game.position).toBeGreaterThan(first_position)
  })


})

describe("game.start", function () {
  beforeEach(function(){

   var inputElement = document.createElement('input')
   inputElement.id = 'userArea'
   document.body.appendChild(inputElement)

   game = new Game();
   timer = new Timer();
   game.start()

 })

  it("starts the timer", function(){
    expect(timer.startTime).toBeDefined()
  })
  it ("should change game.started true", function() {
    expect(game.started).toBeTruthy()

  })

})

describe("game.handleKeyUp", function(){
  beforeEach(function(){
    inputElement = document.createElement('input')
    inputElement.id = 'userArea'
    document.body.appendChild(inputElement)

    var textElement = document.createElement('div')
    textElement.innerText = "some text"
    textElement.id ='game_text'
    document.body.appendChild(textElement)
    game = new Game();
    game.handleKeyUp()
  })
  it("calls game.start if started is false", function(){
    expect(game.started).toBeTruthy()
  })
  it("stops game if user matches entire text correctly", function(){
    spyOn(game,'stop')
    inputElement.value = "some text"
    expect(game.stop).toHaveBeenCalled()
  })
  it("calls .moveturtle() if user inputs correctly", function(){

  })
  it("calls showZee function after two seconds", function(){

  })

})
