const express = require('express')
const app = express()
const getimagesAPI = require('./api-getimages.js')
const uploadAPI = require('./api-upload.js')
const port = Number(process.argv[2]) || 8000
const staticFiles = express.static(`${__dirname}/www`)
app.use(staticFiles)
app.use(getimagesAPI)
app.use(uploadAPI)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

//heres an example API endpoint
app.get('/poop', (req, res) => {
  let data = {
    message: "whats up"
  }
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}, CTRL + C to shutdown`)
})
