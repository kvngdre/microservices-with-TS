import { ConnectOptions } from 'mongoose'

class DatabaseConfig {
  public readonly dbUri: string
  public readonly dbOptions: ConnectOptions

  constructor() {
    this.dbUri =
      process.env.DB_URI ?? 'mongodb://127.0.0.1:2701/'
    this.dbOptions = { dbName: process.env.DB_NAME }
  }
}

export default new DatabaseConfig()
