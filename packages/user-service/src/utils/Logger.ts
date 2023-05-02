import { Service } from 'typedi'
import { addColors, createLogger, format, transports } from 'winston'

import isDevEnvironment from './isDevEnvironment'
import ILogger from '../interfaces/logger.interface'

const { align, cli, colorize, timestamp, printf, combine } = format

const customLevels = {
  levels: { fatal: 0, error: 1, warn: 2, info: 3, debug: 4, silly: 5 },
  colors: {
    fatal: 'red',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'cyan',
    silly: 'magenta'
  }
}

const devFormatter = combine(
  colorize(),
  cli(),
  timestamp({ format: 'HH:mm:ss' }),
  printf(({ level, timestamp, message, meta }) => {
    return `[${level}] ${timestamp as string} ${message as string} ${
      meta !== undefined ? JSON.stringify(meta, null, 2) : ''
    }`
  })
)

const prodFormatter = combine(
  align(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  printf(({ level, timestamp, message, meta }) => {
    return `[${level}] ${timestamp as string} ${message as string} ${
      meta !== undefined ? JSON.stringify(meta, null, 2) : ''
    }`
  })
)

@Service({ global: true })
class Logger implements ILogger {
  private readonly logger

  constructor() {
    const devTransport = new transports.Console({ format: devFormatter })
    const prodTransport = new transports.File({
      format: prodFormatter,
      filename: 'src/logs/error.log'
    })

    this.logger = createLogger({
      level: isDevEnvironment() ? 'silly' : 'error',
      levels: customLevels.levels,
      transports: [isDevEnvironment() ? devTransport : prodTransport]
    })

    addColors(customLevels.colors)
  }

  public fatal(message: string, meta?: any): void {
    this.logger.log('fatal', { message, meta })
  }

  public error(message: string, meta?: any): void {
    this.logger.error({ message, meta })
  }

  public warn(message: string, meta?: any): void {
    this.logger.warn({ message, meta })
  }

  public info(message: string, meta?: any): void {
    this.logger.info({ message, meta })
  }

  public debug(message: string, meta?: any): void {
    this.logger.debug({ message, meta })
  }

  public silly(message: string, meta?: any): void {
    this.logger.silly({ message, meta })
  }
}

export default Logger
