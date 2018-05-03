'use strict'

const abi = require('./abiMappings')

module.exports = {
  network: () => {
    const w = require('web3')
    return {
      connect: () => new w(new w.providers.HttpProvider(require('./provider').provide()))
    }
  },
  accounts: async (web3) => await web3.eth.getAccounts(console.log),
  balance: async (web3, address) => await web3.eth.getBalance(address),
  contract: (web3, abi) => {
    return {
      type: () => web3.eth.contract(abi),
      instance: address => web3.eth.contract(abi).at(address)
    }
  },
  blockchain: web3 => {
    return {
      block: blockHash => web3.eth.getBlock(blockHash),
      currentBlockNumber: () => web3.eth.getBlockNumber()
    }
  }
}
