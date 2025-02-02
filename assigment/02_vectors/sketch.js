////////////////////////////////////////////////////////////////////////////////
//assignment 1: convert the x and y variables to a vector and call it position
//              createVector() is a function that creates a vector.
//              It takes two arguments, the x and y values of the vector.
////////////////////////////////////////////////////////////////////////////////
let x = 100;
let y = 100;

////////////////////////////////////////////////////////////////////////////////
//assignment 2: convert the xspeed and yspeed variables to a vector and call it velocity
////////////////////////////////////////////////////////////////////////////////
let xspeed = 5;
let yspeed = 5;

function setup() {
  //makes a canvas that is the size of the window
  createCanvas(windowWidth, windowHeight);
  //sets the frame rate to 120
  frameRate(120);
}

function draw() {
  background(255);
  ////////////////////////////////////////////////////////////////////////////////
  //assignment 3: now that position and velocity are vectors, add velocity to position
  //              to add the velocity to the position, use the add() function of the position vector
  ////////////////////////////////////////////////////////////////////////////////

  // Move the ball according to its speed.
  x = x + xspeed;
  y = y + yspeed;

  //Check for bouncing.
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  ////////////////////////////////////////////////////////////////////////////////
  //assignment 4: use the position vector to draw the ball
  //              replace x and y with position.x and position.y
  ////////////////////////////////////////////////////////////////////////////////

  //Draw the ball at the position (x,y).
  circle(x, y, 48);
}
