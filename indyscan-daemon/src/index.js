const { envConfig, getAppConfigNames, getAppConfigMap } = require('./config/env')
const logger = require('./logging/logger-main')
const { bootstrapApp } = require('./ioc')
const { appConfigToObjectsConfig } = require('./config/network-config-processor')
const { loadAppConfigFromFile } = require('./config/network-config-processor')

// TODO: Setting up IndySKD logging here is causing seemmingly random crashes!
// const indy = require('indy-sdk')
// indy.setLogger(function (level, target, message, modulePath, file, line) {
//   if (level === 1) {
//     logger.error(`INDYSDK: ${message}`)
//   } else if (level === 2) {
//     logger.warn(`INDYSDK: ${message}`)
//   } else if (level === 3) {
//     logger.info(`INDYSDK: ${message}`)
//   } else if (level === 4) {
//     logger.debug(`INDYSDK: ${message}`)
//   } else {
//     logger.silly(`INDYSDK: ${message}`)
//   }
// })

async function run () {
  console.log(JSON.stringify(getAppConfigNames(), null, 2))
  console.log(JSON.stringify(getAppConfigMap(), null, 2))
  // const appConfig = await loadAppConfigFromFile(envConfig.NETWORKS_CONFIG_PATH)
  // logger.info(`Loaded app confing ${JSON.stringify(appConfig, null, 2)}.`)
  // const objectsConfig = appConfigToObjectsConfig(appConfig)
  // logger.info(`Created objects config: ${JSON.stringify(objectsConfig, null, 2)}.`)
  // let pipelines = await bootstrapApp(objectsConfig)
  // logger.info(`Bootstrap finished! Created ${pipelines.length} pipelines.`)
  // for (const pipeline of pipelines) {
  //   logger.info(`Starting pipeline ${pipeline.getObjectId()}`)
  //   pipeline.start()
  // }
}

run()
