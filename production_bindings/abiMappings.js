'use strict';

/**
 *  Compiled smart contract ABI mappings for deployment.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

module.exports = {
    ExampleAbi: require('../truffle/build/contracts/Example.json').abi,
    ConvertLibAbi: require('../truffle/build/contracts/ConvertLib.json').abi,
    MyCoinAbi: require('../truffle/build/contracts/MyCoin.json').abi,
    MyCoinWalletAbi: require('../truffle/build/contracts/MyCoinWallet.json').abi
};
