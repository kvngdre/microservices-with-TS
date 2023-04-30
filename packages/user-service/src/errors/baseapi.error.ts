import ApiErrorArgs from '../interfaces/apiErrorArgs.interface'
import HttpCodes from '../utils/HttpStatusCodes'

interface BaseAPIErrorArgs extends ApiErrorArgs {
  name: string;
  httpCode: number;
  isOperational: boolean;
}

class BaseAPIError extends Error {
  public readonly name: string
  public readonly httpCode: HttpCodes
  public readonly description?: string
  public readonly data?: any
  public readonly isOperational: boolean = true

  constructor(args: BaseAPIErrorArgs) {
    super(args.message)
    Object.setPrototypeOf(this, new.target.prototype)

    this.name = args.name
    this.httpCode = args.httpCode
    this.message = args.message
    this.isOperational = args.isOperational
    this.description = args.description
    this.data = args.data

    Error?.captureStackTrace(this, this.constructor)
  }
}

export default BaseAPIError
