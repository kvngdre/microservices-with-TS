import dotenv from 'dotenv'
dotenv.config({ path: '.env.dev' })
import express from 'express'

import appLoader from './loaders'

const app = express()
const port = process.env.PORT

appLoader.init(app)

app.listen(port, () => {
  console.log(`User Service Running on Port:${port}`)
})
