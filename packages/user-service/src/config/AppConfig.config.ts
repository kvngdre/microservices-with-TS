import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV ?? 'development'
dotenv.config({ path: `.env.${process.env.NODE_ENV}`})

class AppConfig {
  public name: string
  public port: string
  public version: string

  constructor() {
    this.name = 'User-Service'
    this.port = process.env.PORT ?? '5051'
    this.version = process.env.VERSION ?? 'v1'
  }
}

export default AppConfig
