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

  
});

describe("Timer", function(){
  var timer = new Timer()
  timer.start()
  it("starts time", function (){
    expect(timer.startTime).not.toEqual(null)
  });
  waits(1000)
  
  it("stops time", function(){
    timer.stop()
    expect(timer.stopTime).not.toEqual(null)
  })

  it("returns total time in seconds",
    runs(function (){
      expect(timer.totalTime()).toBeCloseTo(1)
    }));
});

describe("Word matcher", function(){
  var text, input, turtle;
  beforeEach(function(){
    text = document.createElement('div')
    text.innerHTML = "You shall not pass!"
    turtle = document.createElement('img')
    turtle.id = 'turtle'
    document.body.appendChild(turtle)
    input = document.createElement('input')
    input.value = "You shall not pass!"
  })
  it("matches user input to hard coded text", function(){
    console.log(input)
    var matcher = new Matcher(input, text)
    expect(matcher.match).toEqual(true)
  })
  it("turtle image moves on correct match", function(){
    expect(position).toBeGreaterThan(0)
  })
  it("changes the dom element when input is a partial match", function(){
    input.value = "You"
    console.log("before: " + text.innerHTML)
    var matcher = new Matcher(input,text)
    console.log("after: " + text.innerHTML)
    expect(text.innerHTML).toEqual("<span style=\"color:green\"><u>You</u></span> shall not pass!")
  })
})






// <input value="You"></input>
// <div>You Shall not Pass!</div>









