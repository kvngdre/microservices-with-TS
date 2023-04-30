import BaseAPIError from './baseapi.error'
import ApiErrorArgs from '../interfaces/apiErrorArgs.interface'
import HttpCodes from '../utils/HttpStatusCodes'

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
