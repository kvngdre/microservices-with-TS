import { Container } from 'typedi'
import mongoose from 'mongoose'

import config from '../config'
import Logger from '../utils/Logger'
import ILogger from '../interfaces/logger.interface'
import isDevEnvironment from '../utils/isDevEnvironment'

const logger: ILogger = Container.get(Logger)

async function connectDatabase(): Promise<void> {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(config.dbUri, config.dbOptions)

    const message = 'Database Connected ✔'
    isDevEnvironment() ? logger.info(message) : console.log(message)

  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.fatal(error.message, error.stack)
      if (!isDevEnvironment()) console.log(error.message)
    }
    process.exit(1)
  }
}

export default connectDatabase
