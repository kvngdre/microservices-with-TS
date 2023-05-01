import express, {
  type Application,
  type Request,
  type Response
} from 'express'
import { Container } from 'typedi'

import config from '../config'
import Logger from '../utils/Logger'
import { NotFoundError } from '../errors'
import HttpCodes from '../utils/HttpStatusCodes'
import getUserRoutes from '../routes/user.routes'
import ILogger from '../interfaces/logger.interface'
import errorMiddleware from '../middleware/error.middleware'

const logger: ILogger = Container.get(Logger)

export default function expressLoader(app: Application): void {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use(`/api/${config.version}`, getUserRoutes())

  app.use(resourceNotFoundHandler)

  app.use(errorMiddleware)

  function resourceNotFoundHandler(req: Request, res: Response): void {
    const err = new NotFoundError({
      message: 'Resource Not Found',
      description: 'The requested resource not be found, check URL.'
    })

    logger.debug('Resource Not Found')

    res.status(HttpCodes.NOT_FOUND).json({
      success: false,
      errors: [
        { name: err.name, message: err.message, description: err.description }
      ]
    })
  }
}
