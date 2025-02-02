////////////////////////////////////////////////////////////////////////////////
//final assignment: Try to make your own physics simulation.
//                  Maybe use some random values to make it more interesting. Or make more objects.
//                  You can use the code from the previous examples as a starting point.
//                  You can also use the p5.js reference to find more functions that you can use.
//                  https://p5js.org/reference/
//
//                  If you really want a challenge, try to make gravitational attraction between the objects.
//                  https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/2-forces/5-gravitational-attraction
//
//                  have fun!
////////////////////////////////////////////////////////////////////////////////
let position, velocity, acceleration;

function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(width / 2, 50);
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);
}

function draw() {
  background(220);

  // Draw object
  ellipse(position.x, position.y, 20, 20);
}
