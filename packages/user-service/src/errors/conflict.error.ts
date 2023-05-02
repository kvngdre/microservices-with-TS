import BaseAPIError from './baseApi.error'
import ApiErrorArgs from '../interfaces/apiErrorArgs.interface'
import HttpCodes from '../utils/HttpStatusCodes'

class ConflictError extends BaseAPIError {
  constructor(args: ApiErrorArgs) {
    super({
      name: 'Conflict Error',
      httpCode: HttpCodes.CONFLICT,
      isOperational: args.isOperational ?? true,
      message: args.message,
      description: args.description,
      data: args.data
    })
  }
}

export default ConflictError
