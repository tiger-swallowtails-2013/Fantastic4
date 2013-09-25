describe("turtle keystroke events", function () {
  it ("moves based on correct text entry", function(){
    var image = document.createElement("div")
    div id = "turtle"
    image.style.marginLeft = "0px"
    move_turtle();
    expect(image.style.marginLeft).not.toEqual(0);
  });
});

