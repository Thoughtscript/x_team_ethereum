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
    const m = `${(config.ssl) ? 'https' : 'http'}://${config.host}:${config.port}`
    console.log(m)
    return m
  }
}