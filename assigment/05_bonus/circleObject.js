class circleObject {
  constructor(x, y, radius, color) {
    this.position = createVector(x, y);
    this.radius = radius;
    this.color = color;
  }

  update() {
    //maybe you want to update the position? This is the place to do that
  }

  show() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
    pop();
  }
}
