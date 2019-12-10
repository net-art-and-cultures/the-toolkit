const userPreference = document.getElementById('button')
let count = 0

userPreference.onclick = function () {
  const x = Math.random() * window.innerWidth
  const y = Math.random() * window.innerHeight
  userPreference.style.top = y + 'px'
  userPreference.style.bottom = y + 'px'
  userPreference.style.left = x + 'px'
  userPreference.style.right = x + 'px'
  count++
  if (count > 10) {
    window.location = '../popup.html'
  }
}
