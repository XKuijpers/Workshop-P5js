function setup() {
  //makes a canvas that is the size of the window
  createCanvas(windowWidth, windowHeight);
  //sets the frame rate to 120
  frameRate(120);
}

function draw() {
  //sets the background color to dark grey
  background(50);
  //sets the fill color to white
  fill(255);
  //turns off the stroke
  noStroke();
  //creates an ellipse at the mouse position with a width and height of 50
  ellipse(mouseX, mouseY, 50, 50);
}
