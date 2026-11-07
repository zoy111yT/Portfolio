console.log("sketch.js loaded");
let particles = [];
let mood = "neutral";

const moodColors = {
  happy: [230, 120, 140],
  neutral: [180, 180, 180],
  sad: [120, 150, 200]
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 300; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(245, 245, 240, 60);

  if (mouseX < width / 3) {
    mood = "neutral";
  } else if (mouseX < width * 2 / 3) {
    mood = "happy";
  } else {
    mood = "sad";
  }

  for (let p of particles) {
    p.update();
    p.display();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.size = random(2, 5);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);
    let d = dir.mag();

    if (d < 150) {
      dir.normalize();
      dir.mult(0.5);
      this.vel.add(dir);
    }

    this.pos.add(this.vel);
    this.vel.mult(0.95);

    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  display() {
    let c = moodColors[mood];
    noStroke();
    fill(c[0], c[1], c[2], 160);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}