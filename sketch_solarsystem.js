plants_r = [60, 80, 130];
plants_a = [0, 1, 2];
plants_v = [0.1, -0.05, 0.075];
plants_m = [20, 30, 25];

function setup() {
  createCanvas(400, 400);
}

function reDraw() {
  background(220);
  translate(width/2, height/2);
  fill(0);
  noStroke();
  ellipse(0, 0, 10);
}

function updateAngle() {
  for (var i=0; i<plants_a.length; i++) {
    plants_a[i] += plants_v[i];
  }
}

function draw() {
  updateAngle();
  reDraw();
  for (var i=0; i<plants_a.length; i++) {
    noFill();
    stroke(100);
    ellipse(0, 0, plants_r[i]*2);
    
    push();
    rotate(plants_a[i]);
    ellipse(plants_r[i], 0, plants_m[i]);
    pop();
  }
}