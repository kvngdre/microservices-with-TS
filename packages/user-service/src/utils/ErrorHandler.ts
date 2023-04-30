import { Inject, Service } from 'typedi'
import BaseAPIError from '../errors/BaseAPIError'
import Logger from './Logger'


@Service()
class ErrorHandler {
  // private logger: Logger
  constructor(@Inject() private logger: Logger) {
  }
  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseAPIError) {
      return true
    }

    return false
  }

  public async handleError(error: Error | BaseAPIError): Promise<void> {
    if (this.isTrustedError(error)) {
      this.handleTrustedError(error as BaseAPIError)
    } else {
      await this.handleUntrustedError(error)
    }
  }

  private handleTrustedError(error: BaseAPIError): void {
    this.logger.error(error.message, error.stack)
  }

  private async handleUntrustedError(error: Error): Promise<void> {
    this.logger.fatal(error.message, error.stack)
    console.error('Application encountered an untrusted error. Exiting.')

    // ! Email admin about app fatal error

    // await exitHandler.handleExit(1)
  }
}

export default ErrorHandler