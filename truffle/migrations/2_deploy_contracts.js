const  Example = artifacts.require("./Example.sol"),
  MyCoin = artifacts.require("./MyCoin.sol"),
  MyCoinWallet = artifacts.require("./MyCoinWallet.sol"),
  ConvertLib = artifacts.require("./ConvertLib.sol");

module.exports = deployer => {
  deployer.deploy(ConvertLib);

  deployer.link(ConvertLib, Example);
  deployer.deploy(Example);

  deployer.link(ConvertLib, MyCoin);
  deployer.deploy(MyCoin);

  deployer.link(ConvertLib, MyCoinWallet);
  deployer.deploy(MyCoinWallet);
};
