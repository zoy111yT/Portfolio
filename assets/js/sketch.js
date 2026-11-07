sketch.js
console.log("sketch.js is running");

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(240, 240, 235);

  for (let p of particles) {
    p.update();
    p.display();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = random(3, 6);
  }

  update() {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let d = sqrt(dx * dx + dy * dy);

    if (d < 120) {
      this.x += dx * 0.02;
      this.y += dy * 0.02;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  display() {
    noStroke();
    fill(120, 150, 200, 180);
    ellipse(this.x, this.y, this.size);
  }
}

