/*console.log(document.querySelectorAll('iframe'))*/
/* setTimeout(() => {
  document.querySelector('iframe').src = "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg"
}, 1000) */
let ad = document.querySelectorAll(iframe)
for (let i = 0; i < ad.length; i++ ){
  let father = ad[i].parentElement
father.removeChild(ad[i])
const img = https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg
father.appendChild('img.src')
}
/* ad[0].setAttribute ('src','https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg')*/
