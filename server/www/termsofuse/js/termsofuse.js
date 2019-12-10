const userPreference = document.getElementById('button')
let count = 0

userPreference.onclick = function () {
  const x = Math.random() * window.innerWidth - 120
  const y = Math.random() * window.innerHeight - 40
  userPreference.style.position = 'fixed'
  userPreference.style.top = y + 'px'
  userPreference.style.left = x + 'px'
  count++
  if (count > 10) {
    window.location = '../popup.html'
  }
}
