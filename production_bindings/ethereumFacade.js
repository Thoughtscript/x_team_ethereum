'use strict';

const abi = require('./abiMappings');

module.exports = {
    network: () => {
        return {
            connect: () => {
                const w = require('web3');
                return new w(new w.providers.HttpProvider(require('./provider').provide()));
            }
        }
    },
    address: (web3, address) => {
        return {
            balance: () => {
                return web3.eth.getBalance(address).toNumber()
            }
        }
    },
    contract: (web3, abi) => {
        return {
            type: () => {
                return web3.eth.contract(abi)
            },
            instance: address => {
                return web3.eth.contract(abi).at(address)
            }
        }
    },
    blockchain: web3 => {
        return {
            block: blockHash => {
                return web3.eth.getBlock(blockHash)
            },
            currentBlockNumber: () => {
                return web3.eth.getBlockNumber()
            }
        }
    }
};
