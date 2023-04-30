import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
  type Router
} from 'express'

import { NotFoundError } from '../errors'
import getUserRoutes from '../routes/user.routes'


export default function expressLoader(app: Application): void {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use('/api', getUserRoutes())

  app.use(resourceNotFoundHandler)

  function resourceNotFoundHandler(_req: Request, _res: Response, next: NextFunction): void {
    const err = new NotFoundError({
      message: 'Not Found',
      description:
        'The requested resource not be found, check URL.'
    })

    next(err)
  }
}
