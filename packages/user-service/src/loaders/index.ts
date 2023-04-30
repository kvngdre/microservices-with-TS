import { type Application } from 'express'
import expressLoader from './express.loader'


const appLoader = {
  init: (app: Application): void => {
    expressLoader(app)
  }
}

export default appLoader
