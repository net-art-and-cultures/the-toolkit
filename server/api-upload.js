const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'www/uploads/' })


router.post('/upload-image', upload.single('photo'), (req, res) => {
  res.send('image uploaded!')
})

module.exports = router
