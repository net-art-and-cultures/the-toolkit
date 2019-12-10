

function swapAds(images){
  let ad = document.querySelectorAll('iframe')


  for (let i = 0; i < ad.length; i++ ){
    let father = ad[i].parentElement
    father.removeChild(ad[i])


    const img = document.createElement('img')
    const r = Math.floor(Math.random()* images.length)
    img.src = "http://localhost:8000"+images[r]
    father.appendChild(img)
  }

}
fetch('http://localhost:8000/image-library', {method:"GET"})
.then(res => res.json())
.then(json => {
  console.log(json.images)
  setInterval(() => {swapAds(json.images)},3000)
})
