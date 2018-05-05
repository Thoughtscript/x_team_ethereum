'use strict'

/**
 *  React client provider configuration.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

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