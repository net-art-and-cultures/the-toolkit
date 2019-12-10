let ad = document.querySelectorAll('iframe')

for (let i = 0; i < ad.length; i++ ){
  let father = ad[i].parentElement
  father.removeChild(ad[i])

const img = document.createElement('img')

  for (let z = 0; z < images.length; z++ ){
      img.src = 'https://i.imgur.com/lVlPvCB.gif'
      father.appendChild(img)
    }
    }
