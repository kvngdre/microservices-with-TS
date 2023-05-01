import { type Application } from 'express'
import Container from 'typedi'

import Logger from '../utils/Logger'
import expressLoader from './express.loader'
import connectDatabase from './database.loader'
import ILogger from '../interfaces/logger.interface'

const logger: ILogger = Container.get(Logger)

const appLoader = {
  init: (app: Application): void => {
    expressLoader(app)
    logger.info('Express loaded ✔')

    connectDatabase()
  }
}

export default appLoader
