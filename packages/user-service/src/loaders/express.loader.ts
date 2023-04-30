import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from 'express'

import { NotFoundError } from '../errors'
import config from '../config'
import getUserRoutes from '../routes/user.routes'
import errorMiddleware from '../middleware/error.middleware'


export default function expressLoader(app: Application): void {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use(`/api/${config.version}`, getUserRoutes())

  app.use(resourceNotFoundHandler)

  app.use(errorMiddleware)

  function resourceNotFoundHandler(_req: Request, _res: Response, next: NextFunction): void {
    const err = new NotFoundError({
      message: 'Resource Not Found',
      description:
        'The requested resource not be found, check URL.'
    })

    next(err)
  }
}
