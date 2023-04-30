import ApiErrorArgs from '../interfaces/ApiErrorArgs'
import HttpCodes from '../interfaces/HttpStatusCodes'

interface BaseAPIErrorArgs extends ApiErrorArgs {
  name: string;
  httpCode: number;
  isOperational: boolean;
}

class BaseAPIError extends Error {
  public readonly name: string
  protected readonly httpCode: HttpCodes
  protected readonly description?: string
  protected readonly data?: any
  protected readonly isOperational: boolean = true

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
