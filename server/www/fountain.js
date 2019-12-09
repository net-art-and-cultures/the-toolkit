var of;
const button = document.querySelector('input');
const paragraph = document.querySelector('p');


button.addEventListener('click', updateButton);


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    var t =
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
  background(200,200,400);
  of.Draw();
  of.CreateN();
  of.Step();
  noStroke();
  text(of.length, width/2, 20);
  stroke(0);
}
