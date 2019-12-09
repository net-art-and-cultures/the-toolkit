let ad = document.querySelectorAll('iframe'){
const img = document.createElement('img')

for (let i = 0; i < ad.length; i++ ){
  let father = ad[i].parentElement
  father.removeChild(ad[i])

  for (let z = 0; z < images.length; z++ ){
      img.src = 'images[z]'
      father.appendChild(img)
    }
}
}
