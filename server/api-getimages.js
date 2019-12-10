const express = require('express')
const router = express.Router()
const uploadFolder = 'www/uploads/';
const fs = require('fs');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

// '/image-library' is the url extension for the image library
// this
router.get('/image-library', (req, res)=> {
  let data = {
//array of image names
    images:[]
  }
  fs.readdirSync(uploadFolder).forEach(file => {
    //produces filepaths for each image in the upload folder
    path = "/uploads/"
    data.images.push(path+file);
  });
  // the data sent back to the user
  res.json(data)
})


module.exports = router
