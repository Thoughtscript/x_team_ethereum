'use strict';

/**
 *  Compiled smart contract bytecode mappings for deployment.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

module.exports = {
  ExampleBytecode: require('../truffle/build/contracts/Example.json').bytecode,
  ConvertLibBytecode: require('../truffle/build/contracts/ConvertLib.json').bytecode,
  MyCoinBytecode: require('../truffle/build/contracts/MyCoin.json').bytecode,
  MyCoinWalletBytecode: require('../truffle/build/contracts/MyCoinWallet.json').bytecode,
};
