let of;
let c1, c2;
const button = document.querySelector('input');
const Y_AXIS = 100;
const X_AXIS = 200;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);
    let t =
    {
        name: "test",
        colors: ["red"],
        lifetime: 1000,
        angle: [200,105],
        rate: [40,0.1,200,10],
        x: 0.5,
        y: 0.5,
    };
    of = new Fountain(null, t);
}

function draw() {
  // background(200,200,400);
  setGradient(0, 0, width / 2, height, c1, c2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, c2, c1, X_AXIS);

  of.Draw();
  of.CreateN();
  of.Step();
  noStroke();
  text(of.length, width/2, 20);
  stroke(0);
}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
