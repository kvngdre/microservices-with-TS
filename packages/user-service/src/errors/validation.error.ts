import BaseAPIError from './baseApi.error'
import ApiErrorArgs from '../interfaces/apiErrorArgs.interface'
import HttpCodes from '../utils/HttpStatusCodes'

class ValidationError extends BaseAPIError {
  constructor(args: ApiErrorArgs) {
    super({
      name: 'Validation Error',
      httpCode: HttpCodes.BAD_REQUEST,
      isOperational: args.isOperational ?? true,
      message: args.message,
      description: args.description,
      data: args.data
    })
  }
}

export default ValidationError
