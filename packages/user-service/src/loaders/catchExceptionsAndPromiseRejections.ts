function uncaughtExceptionHandler(): void {
  process.on('uncaughtException', (error) => {
    console.error('uncaught exception thrown', error.message)
  })
}

function unHandledRejectionHandler(): void {
  process.on('unhandledRejection', (error: Error) => {
    console.error(`Unhandled Rejection ${error.message}`)

    // ErrorHandler.handleError(error)
  })
}

uncaughtExceptionHandler()
unHandledRejectionHandler()
