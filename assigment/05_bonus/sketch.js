////////////////////////////////////////////////////////////////////////////////
//Bonus Content: Convert you code to reusable classes
//               Check the contruct for a class in the circle.js file
////////////////////////////////////////////////////////////////////////////////
let position, velocity, acceleration;
let circles = [];
let amountCircles = 100;
let colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5", "#FF33A1", "#A1FF33"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(width / 2, 50);
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);

  //Check the circleObject what the arguments are
  for (let i = 0; i < amountCircles; i++) {
    circles[i] = new circleObject(random(width), random(height), random(10, 50), random(colors));
  }
}

function draw() {
  background(0);

  // Draw object
  ellipse(position.x, position.y, 20, 20);

  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].show();
  }
}
