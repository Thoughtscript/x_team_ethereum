'use strict'

const truffle = require('../truffle/truffle')

//Clientside safe config
const config = {
  ssl: false,
  host: truffle.networks['development'].host,
  port:  truffle.networks['development'].port
}

module.exports = {
  provide: () => {
    return `${(config.ssl) ? 'https' : 'http'}://${config.host}:${config.port}`
  }
}