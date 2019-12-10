let checkbox
let d = 0
let r = 25

function setup() {
  checkbox = createCheckbox('', false)
}

function draw () {
	d += 0.02
	let x = sin(d) * r + width/2
  let y = cos(d) * r + height/2
	checkbox.position(x, y)
}
