////////////////////////////////////////////////////////////////////////////////
//assignment 1: convert the x and y variables to a vector and call it position
//              createVector() is a function that creates a vector.
//              It takes two arguments, the x and y values of the vector.
////////////////////////////////////////////////////////////////////////////////
let position;
//let x = 100;
//let y = 100;

////////////////////////////////////////////////////////////////////////////////
//assignment 2: convert the xspeed and yspeed variables to a vector and call it velocity
////////////////////////////////////////////////////////////////////////////////
let velocity;
//let xspeed = 5;
//let yspeed = 5;

function setup() {
  //makes a canvas that is the size of the window
  createCanvas(windowWidth, windowHeight);
  //sets the frame rate to 120
  frameRate(120);
  position = createVector(100, 100);
  velocity = createVector(5, 5);
}

function draw() {
  background(0);
  ////////////////////////////////////////////////////////////////////////////////
  //assignment 3: now that position and velocity are vectors, add velocity to position
  //              to add the velocity to the position, use the add() function of the position vector
  ////////////////////////////////////////////////////////////////////////////////

  // Move the ball according to its speed.
  position.add(velocity);
  //position.x = position.x + velocity.x;
  //position.y = position.y + velocity.y;

  //Check for bouncing.
  if (position.x > width || position.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y = velocity.y * -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  ////////////////////////////////////////////////////////////////////////////////
  //assignment 4: use the position vector to draw the ball
  //              replace x and y with position.x and position.y
  ////////////////////////////////////////////////////////////////////////////////

  //Draw the ball at the position (x,y).
  circle(position.x, position.y, 48);
}
