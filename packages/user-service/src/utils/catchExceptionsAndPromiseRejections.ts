function uncaughtExceptionHandler(): void {
  process.on('uncaughtException', (error) => {
    console.error('uncaught exception thrown', error.stack)
  })
}

function unHandledRejectionHandler(): void {
  process.on('unhandledRejection', (error: Error) => {
    console.error(`Unhandled Rejection ${error.stack}`)

    // ErrorHandler.handleError(error)
  })
}

uncaughtExceptionHandler()
unHandledRejectionHandler()
