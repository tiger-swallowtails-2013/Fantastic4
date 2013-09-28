describe("moveTurtle", function(){
  afterEach(function() {
    document.body.removeChild(userInputElement);
  })
  it("moves the turtle's position", function(){
    userInputElement = document.createElement('input')
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

   inputElement = document.createElement('input')
   inputElement.id = 'userArea'
   document.body.appendChild(inputElement)

   game = new Game();
   timer = new Timer();
   game.start()

 })
  afterEach(function() {
    document.body.removeChild(inputElement);
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

    textElement = document.createElement('div')
    textElement.innerText = "some text"
    textElement.id ='game_text'
    document.body.appendChild(textElement)
    game = new Game();
    game.start()
    game.handleKeyUp()
  })

  afterEach(function() {
    document.body.removeChild(inputElement);
    document.body.removeChild(textElement);
  });

  it("calls game.start if started is false", function(){
    expect(game.started).toBeTruthy()


  })
  // it("stops game if user matches entire text correctly", function(){
  //   inputElement.value = "some text"
  //   game.handleKeyUp()
  //   spyOn(game, 'stop')
  //   expect(game.stop).toHaveBeenCalled()
  // })
it("calls .moveturtle() if user inputs correctly", function(){

})
it("calls showZee function after two seconds", function(){

})

})

describe("this.showZee", function(){
  beforeEach(function(){


    zee = document.createElement('div')
    // zee.id = 'zee'
    zee.setAttribute('id', 'zee')
    document.body.appendChild(zee)

    inputElement = document.createElement('input')
    inputElement.setAttribute('id', 'userArea')
    document.body.appendChild(inputElement)


    game = new Game();
    // game.start()
    game.showZee()
  })

  it("shows zee", function(){
    expect(zee.style.display).toEqual("inline")
  })

  it("tells me if Zee is true", function(){
    expect(game.zeeVisible).toBeTruthy()
  })


})
