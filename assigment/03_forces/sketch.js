let position, velocity, acceleration;
let windForce = false;

function setup() {
  createCanvas(800, 800);
  position = createVector(width / 2, 50);
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);
}

function draw() {
  background(220);
  //Gravity is a vector pointing down that is added to acceleration
  let gravity = createVector(0, 0.1);

  // Apply forces
  acceleration.add(gravity);

  // Update motion
  velocity.add(acceleration);
  position.add(velocity);

  // Reset acceleration
  acceleration.mult(0);

  ////////////////////////////////////////////////////////////////////////////////
  //assignment 1: when it hit the edge of the canvas, the ball should bounce back
  //              Do you how to slow down the ball when it hits the edge?
  ////////////////////////////////////////////////////////////////////////////////
  // Check edges
  let bounce = -1;
  if (position.x > width) {
    position.x = width;
    velocity.x *= bounce;
  } else if (position.x < 0) {
    velocity.x *= bounce;
    position.x = 0;
  }
  if (position.y > height) {
    velocity.y *= bounce;
    position.y = height;
  } else if (position.y < 0) {
    velocity.y *= bounce;
    position.y = 0;
  }

  if (mouseIsPressed) {
    ////////////////////////////////////////////////////////////////////////////////
    //assignment 2: mouseIsPressed is a boolean variable that is true when the mouse is pressed.
    //              add wind force to the acceleration vector
    ////////////////////////////////////////////////////////////////////////////////
  }

  // Draw object
  ellipse(position.x, position.y, 20, 20);
}
