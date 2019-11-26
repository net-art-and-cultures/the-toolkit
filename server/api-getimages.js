const express = require('express')
const router = express.Router()
const uploadFolder = 'www/uploads/';
const fs = require('fs');

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
