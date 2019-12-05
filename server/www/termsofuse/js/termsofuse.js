const userPreference = document.getElementById('button')

// userPreference.addEventListener('mouseover', function () {
//   userPreference.style.position = 'fixed'
// }
// )
userPreference.onclick = function () {
  const x = Math.floor(Math.random() * 400)
  const y = Math.floor(Math.random() * 400)
  userPreference.style.marginTop = x + 'px'
  userPreference.style.marginLeft = y + 'px'
}

// userPreference.mouseover = function () {
//   const x = Math.floor(Math.random() * document.windowWidth)
//   const y = Math.floor(Math.random() * document.windowHeight)
//   userPreference.style.top = x + 'px'
//   userPreference.style.left = y + 'px'
// }

// function getRandomPosition (element) {
//   const x = document.body.windowHeight - element.Height
//   const y = document.body.windowWidth - element.Width
//   const randomX = Math.random() * (userPreference + x)
//   const randomY = Math.random() * (userPreference + y)
//   return [randomX, randomY]
// }
//
// window.onload = function () {
//   const rpos = document.getElementsByClassName('button')
//   for (const rpo of rpos) {
//     rpo.setAttribute('style', 'position:absolute;')
//     document.body.appendChild(rpo)
//     const xy = getRandomPosition(rpo)
//     rpo.style.top = xy[0] + 'px'
//     rpo.style.left = xy[1] + 'px'
//   }
//
//   if (userPreference.addEventListener('mouseover', function () {
//     userPreference.style.position = 'fixed'} )
//     {
//   getRandomPosition()
//   } else {
//     userPreference.style.position = 'fixed'
//   }
// }



// userPreference.addEventListener('mouseover', function () {
//   userPreference.style.position = 'fixed'
// }
// )
//
// function getRandomPosition (element) {
//   let x = document.body.windowHeight - element.Height
//   let y = document.body.windowWidth - element.Width
//   let randomX = Math.floor(Math.random() * (userPreference + x)) + windowHeight
//   let randomY = Math.floor(Math.random() * (userPreference + y)) + windowWidth
//   return [randomX, randomY]
// }
//
// window.onload = function () {
//   const rpos = document.getElementsByClassName('button')
//   for (let rpo of rpos) {
//     rpo.setAttribute('style', 'position:absolute;')
//     document.body.appendChild(rpo)
//     let xy = getRandomPosition(rpo)
//     rpo.style.top = xy[0] + 'px'
//     rpo.style.left = xy[1] + 'px'
//   }
//
//
