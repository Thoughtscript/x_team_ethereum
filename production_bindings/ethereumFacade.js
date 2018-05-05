'use strict'

/**
 *  Ethereum Web3.js facade.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

const w = require('web3')

module.exports = {

  network: () => {
    return {
      connect: () => new w(new w.providers.HttpProvider(require('./provider').provide()))
    }
  },

  accounts: async web3 => await web3.eth.getAccounts(console.log),

  toEthFromWei: balance => w.utils.fromWei(balance, 'ether'),

  balance: async (web3, address) => {
    let response = await web3.eth.getBalance(address)
    console.log(response)
    return await response
  },

  contract: (web3) => {
    return {
      type: abi => web3.eth.Contract(abi),
      instance: (abi, address) => new web3.eth.Contract(abi, address),
      deploy: async (contract, bytecode, args, gas) => await contract.deploy({ "data": bytecode, "gas": gas || 2000000, "arguments": args || [] })
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
