import { Container } from 'typedi'
import mongoose from 'mongoose'

import config from '../config'
import Logger from '../utils/Logger'
import ILogger from '../interfaces/logger.interface'
import isDevEnvironment from '../utils/isDevEnvironment'

const logger: ILogger = Container.get(Logger)

async function connectDatabase(): Promise<void> {
  mongoose.set('strictQuery', true)
  await mongoose
    .connect(config.dbUri, config.dbOptions)
    .then(() => {
      const message = 'Database connected 🔌'
      isDevEnvironment() ? logger.info(message) : console.log(message)
    })
    .catch((error) => {
      isDevEnvironment()
        ? logger.fatal(error.message, error.stack)
        : console.log(error.message)
    })
}

export default connectDatabase
