
function draw() {
  createCanvas(window.innerWidth, window.innerHeight)
  for (let x = 0; x < width / 10; x++) {
    for (let y = 0; y < height; y += 10) {
      if (random() > 0.5) line(x * 10, y + 10, x * 10 + 1, y)
      else line(x, y, x + 10, y + 10)
    }
  }
}
