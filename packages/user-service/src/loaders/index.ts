import { type Application } from 'express'
import Container from 'typedi'

import Logger from '../utils/Logger'
import expressLoader from './express.loader'
import connectDatabase from './database.loader'
import ILogger from '../interfaces/logger.interface'

const logger: ILogger = Container.get(Logger)

const appLoader = {
  init: async (app: Application): Promise<Application> => {
    expressLoader(app)
    logger.info('Express Loaded ✔')

    await connectDatabase()

    logger.info('Loading Successful 🚀')
    
    return app
  }
}

export default appLoader
