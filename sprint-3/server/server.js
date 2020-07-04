const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())


const upNext = require('./data/videos-list.json')
const mainVideoList = require('./data/main-video.json')




app.get('/video-list', (req, res) => {
  res.send(upNext)
})

app.get('/video/:id', (req, res) => {
  let reqId = req.params.id
  let mainVideo = mainVideoList.filter(item => item.id === reqId)
  res.json(mainVideo[0])
})

app.listen(8080, () => console.info('running on 8080'))

