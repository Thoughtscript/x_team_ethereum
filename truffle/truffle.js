module.exports = {
  contracts_build_directory: "./build/contracts",
  networks: {
    live: {
      network_id: 1,
      host: 'localhost',
      port: 8545
    },
    testnet: {
      network_id: 3,
      host: 'localhost',
      port: 8545
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    }
  }
}
