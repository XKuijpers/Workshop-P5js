function setup() {
  //makes a canvas that is the size of the window
  createCanvas(windowWidth, windowHeight);
  //sets the frame rate to 120
  frameRate(120);

  for (let i = 0; i < 200; i++) {
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(20, 50));
  }
}

function draw() {
  //sets the background color to dark grey
  //background(50);
  //sets the fill color to white
  fill(255);
  //turns off the stroke
  noStroke();
  //creates an ellipse at the mouse position with a width and height of 50
  //ellipse(mouseX, mouseY, 50, 50);

  ////////////////////////////////////////////////////////////////////////////////
  //assignment 1: Try to make your own extra circles and give them different colors.
  //              Maybe make the color for each circle random
  ////////////////////////////////////////////////////////////////////////////////
}
