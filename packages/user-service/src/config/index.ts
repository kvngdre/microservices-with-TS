import appConfig from './AppConfig.config'
import dbConfig from './db.config'

export default { 
  ...appConfig,
  ...dbConfig
}
