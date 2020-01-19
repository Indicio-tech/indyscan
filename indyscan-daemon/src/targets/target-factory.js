const logger = require('../logging/logger-main')

const INTERFACE = "TARGET"

const IMPLEMENTATIONS = {
  elasticsearch: "elasticsearch"
}

function buildSourceFactory() {
  async function buildImplementation (sourceConfig) {
    logger.debug(`Creating source from config: ${JSON.stringify(sourceConfig)}`)
    const {impl, data} = sourceConfig
    if (impl === IMPLEMENTATIONS.elasticsearch) {
      return createTargetElasticsearch(data)
    } else {
      throw Error(`Unknown source implementation: ${impl}. Supported: ${JSON.stringify(Object.values(IMPLEMENTATIONS))}`)
    }
  }

  function getInterface() {
    return INTERFACE
  }

  return {
    buildImplementation,
    getInterface
  }
}

module.exports.buildSourceFactory = buildSourceFactory