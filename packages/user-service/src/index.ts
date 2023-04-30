import 'reflect-metadata'
import express from 'express'

import config from './config'
import appLoader from './loaders'

const app = express()
const port = config.port

appLoader.init(app)

app.listen(port, () => {
  console.log(`User Service Running on Port:${port}`)
})
