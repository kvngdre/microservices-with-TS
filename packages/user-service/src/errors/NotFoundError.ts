import BaseAPIError from './BaseAPIError'
import ApiErrorArgs from '../interfaces/ApiErrorArgs'
import HttpCodes from '../interfaces/HttpStatusCodes'

class NotFoundError extends BaseAPIError {
  constructor(args: ApiErrorArgs) {
    super({
      name: 'Not Found Error',
      httpCode: HttpCodes.NOT_FOUND,
      isOperational: true,
      message: args.message,
      description: args.description,
      data: args.data
    })
  }
}

export default NotFoundError
