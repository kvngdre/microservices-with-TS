import BaseAPIError from './baseApi.error'
import HttpCodes from '../utils/HttpStatusCodes'
import ApiErrorArgs from '../interfaces/apiErrorArgs.interface'

class NotFoundError extends BaseAPIError {
  constructor(args: ApiErrorArgs) {
    super({
      name: 'Not Found Error',
      httpCode: HttpCodes.NOT_FOUND,
      isOperational: args.isOperational ?? true,
      message: args.message,
      description: args.description,
      data: args.data
    })
  }
}

export default NotFoundError
