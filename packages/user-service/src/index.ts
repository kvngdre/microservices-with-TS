import './utils/catchExceptionsAndPromiseRejections'
import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'

import config from './config'
import appLoader from './loaders'

const app = express()
const port = config.port

async function startApp(): Promise<void> {
  try {
    await appLoader.init(app)

    app.listen(port, () => {
      console.log(`User Service Running on Port: ${port}`)
    })
  } catch (error: any) {
    console.error(error.message)
  }
}

startApp()
