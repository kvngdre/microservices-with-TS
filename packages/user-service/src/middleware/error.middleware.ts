import { type Request, type Response, type NextFunction } from 'express'
import BaseAPIError from '../errors/BaseAPIError'
import HttpCodes from '../interfaces/HttpStatusCodes'
import { Container } from 'typedi'
import ErrorHandler from '../utils/ErrorHandler'

const errorHandler: ErrorHandler = Container.get(ErrorHandler)

export default (
  err: Error | BaseAPIError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(HttpCodes.BAD_REQUEST).json({
      success: false,
      name: 'Bad Request',
      message: 'Error in request JSON.'
    })
  }

  errorHandler.handleError(err)

  if (errorHandler.isTrustedError(err) && 'httpCode' in err) {
    return res.status(err.httpCode).json({
      success: false,
      errors: [
        { name: err.name, message: err.message, description: err.description }
      ]
    })
  }

  return res.status(HttpCodes.INTERNAL_SERVER).json({
    name: 'Server Error',
    message: 'Something went wrong.'
  })
}
