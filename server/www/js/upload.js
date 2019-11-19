
const upButt = document.querySelector('#imgInp')

upButt.addEventListener('change', function (){
  console.log(this.files)
  if (this.files && this.files[0] && this.files[0].type.includes('image')){
    const formData = new FormData()
    formData.append("photo", this.files[0])
    fetch('/upload-image', {method: "POST", body: formData})
  } else {
    console.log('bad news')
  }
})

// fetch('/upload-image')
//   .then(response => document.getElementById("thing").innerHTML = "SUCCESS")
//   .then(commits => document.getElementById("thing").innerHTML = "FAILURE")
// above code is for confirming that uploads happened
