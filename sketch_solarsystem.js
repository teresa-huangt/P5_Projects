// Radius of the orbits
planets_r = [0.4, 0.7, 1, 1.5, 5.2, 9.5, 19.2, 30.1];
planets_r_m = planets_r;


// Angle position of the planets
planets_a = [0, 1, 2, 2.5, 1.5, 0.5, 1.2, 2.3]; // Radians
// Angle speed of the planets
planets_v = [0.1, -0.05, 0.075, -0.02, 0.09, 0.06, -0.09, -0.2]; // Radians per frame
// Mass of the planets
planets_m = [0.06, 0.8, 1, 0.1, 317.8, 95.2, 14.5, 17.1];
planets_m_m = planets_m;
// maxM = max(planets_m);
// minM = min(planets_m);
// planets_m_m = map(planets_m, minM, maxM, 1, 100);

function setup() {
  // Init canvas
  createCanvas(800, 800);

  // Map parameter
  maxR = max(planets_r);
  minR = min(planets_r);
  for (var i=0; i<planets_r.length; i++) {
    planets_r_m[i] = map(planets_r[i], minR, maxR, 30, 100);
  }
  // planets_r_m = map(planets_r, minR, maxR, 20, 50);
  maxM = max(planets_m);
  minM = min(planets_m);
  for (var i=0; i<planets_m.length; i++) {
    planets_m_m[i] = map(planets_m[i], minM, maxM, 10, 30);
  }
  // planets_m_m = map(planets_m, minM, maxM, 1, 10);
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
    ellipse(0, 0, planets_r_m[i]*2);
    
    // Draw the planet
    push();
    // Rotate the canvas
    rotate(planets_a[i]);
    // Draw planet on (r, 0)
    ellipse(planets_r_m[i], 0, planets_m_m[i]);
    pop();
  }
}







