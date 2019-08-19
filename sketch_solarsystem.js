// Radius of the orbits
planets_r = [60, 80, 130];
// Angle position of the planets
planets_a = [0, 1, 2]; // Radians
// Angle speed of the planets
planets_v = [0.1, -0.05, 0.075]; // Radians per frame
// Mass of the planets
planets_m = [20, 30, 25];

function setup() {
  // Init canvas
  createCanvas(400, 400);
}

function initDraw() {
  background(220);
  // Position on center
  translate(width/2, height/2);
  fill(0);
  noStroke();
  // Draw inner circle
  // As if it's the sun
  ellipse(0, 0, 10);
}

function updateAngle() {
  // Update angle positions of the planets
  for (var i=0; i<planets_a.length; i++) {
    planets_a[i] += planets_v[i];
    // Pervent angle from being too large
    planets_a[i] %= 2*PI;
  }
}

function draw() {
  // Update angle positions on each frame
  updateAngle();
  // Prepare to draw planets
  initDraw();
  for (var i=0; i<planets_a.length; i++) {
    // For each planet
    noFill();
    stroke(100);
    // Draw orbit
    ellipse(0, 0, planets_r[i]*2);
    
    // Draw the planet
    push();
    // Rotate the canvas
    rotate(planets_a[i]);
    // Draw planet on (r, 0)
    ellipse(planets_r[i], 0, planets_m[i]);
    pop();
  }
}







