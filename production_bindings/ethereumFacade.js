'use strict'

const abi = require('./abiMappings')

module.exports = {

  network: () => {
    const w = require('web3')
    return {
      connect: () => new w(new w.providers.HttpProvider(require('./provider').provide()))
    }
  },

  accounts: async web3 => await web3.eth.getAccounts(console.log),

  balance: async (web3, address) => {
    let response = await web3.eth.getBalance(address)
    console.log(response)
    return await response
  },

  contract: (web3) => {
    return {
      type: abi => web3.eth.Contract(abi),
      instance: (abi, address) => new web3.eth.Contract(abi, address),
      deploy: async contract => await contract.deploy()
    }
  },

  blockchain: web3 => {
    return {
      block: blockHash => web3.eth.getBlock(blockHash),
      currentBlockNumber: async () => {
        let response = await web3.eth.getBlockNumber()
        console.log(response)
        return await response
      }
    }
  }

}
